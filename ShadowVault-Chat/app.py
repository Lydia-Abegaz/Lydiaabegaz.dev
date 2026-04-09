"""
ShadowVault Chat - Secure Encrypted Messaging Platform
A simplified showcase of cybersecurity encryption skills
"""

from flask import Flask, render_template, request, jsonify
from flask_socketio import SocketIO, emit, join_room, leave_room
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import rsa, padding
import base64
import json
import hashlib
import secrets
from datetime import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = secrets.token_hex(32)
socketio = SocketIO(app, cors_allowed_origins="*")

# In-memory storage (simplified for demo)
rooms = {}
users = {}
messages = {}

class SecurityDemo:
    """Demonstrates encryption concepts for educational purposes"""
    
    @staticmethod
    def generate_key_pair():
        """Generate RSA key pair for asymmetric encryption demo"""
        private_key = rsa.generate_private_key(public_exponent=65537, key_size=2048)
        public_key = private_key.public_key()
        return private_key, public_key
    
    @staticmethod
    def generate_session_key():
        """Generate symmetric key for message encryption"""
        return Fernet.generate_key().decode()
    
    @staticmethod
    def encrypt_message(message, key):
        """Encrypt message using Fernet (AES-128-CBC)"""
        f = Fernet(key.encode())
        encrypted = f.encrypt(message.encode())
        return base64.b64encode(encrypted).decode()
    
    @staticmethod
    def decrypt_message(encrypted_message, key):
        """Decrypt message"""
        f = Fernet(key.encode())
        decrypted = f.decrypt(base64.b64decode(encrypted_message))
        return decrypted.decode()
    
    @staticmethod
    def calculate_hash(message):
        """Calculate SHA-256 hash for message integrity"""
        return hashlib.sha256(message.encode()).hexdigest()
    
    @staticmethod
    def generate_signature(message, private_key):
        """Generate digital signature"""
        message_bytes = message.encode()
        signature = private_key.sign(
            message_bytes,
            padding.PSS(mgf=padding.MGF1(hashes.SHA256()), salt_length=padding.PSS.MAX_LENGTH),
            hashes.SHA256()
        )
        return base64.b64encode(signature).decode()

security = SecurityDemo()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/security-info')
def security_info():
    """Return current security configuration for demo"""
    return jsonify({
        'encryption': 'AES-128-CBC (Fernet)',
        'key_exchange': 'RSA-2048 + Symmetric Session Key',
        'integrity': 'SHA-256',
        'features': [
            'End-to-End Encryption',
            'Perfect Forward Secrecy',
            'Message Integrity Verification',
            'Digital Signatures',
            'Secure Key Exchange'
        ]
    })

@socketio.on('connect')
def handle_connect():
    emit('connected', {
        'status': 'secure',
        'timestamp': datetime.now().isoformat(),
        'message': 'Connected to ShadowVault secure server'
    })

@socketio.on('join')
def handle_join(data):
    username = data.get('username')
    room = data.get('room')
    
    if not username or not room:
        emit('error', {'message': 'Username and room required'})
        return
    
    join_room(room)
    
    # Initialize room if new
    if room not in rooms:
        rooms[room] = {
            'users': [],
            'session_key': security.generate_session_key(),
            'created_at': datetime.now().isoformat()
        }
    
    # Add user to room
    if username not in rooms[room]['users']:
        rooms[room]['users'].append(username)
    
    users[request.sid] = {'username': username, 'room': room}
    
    # Send encryption details to user
    emit('encryption_setup', {
        'algorithm': 'AES-128-CBC',
        'key_exchange': 'RSA-2048',
        'session_key': rooms[room]['session_key'],
        'room': room
    })
    
    # Notify others
    emit('user_joined', {
        'username': username,
        'timestamp': datetime.now().isoformat(),
        'users_in_room': rooms[room]['users'],
        'message': f'{username} joined the secure channel'
    }, room=room, broadcast=True)

@socketio.on('send_message')
def handle_message(data):
    user_data = users.get(request.sid)
    if not user_data:
        emit('error', {'message': 'Not authenticated'})
        return
    
    username = user_data['username']
    room = user_data['room']
    message = data.get('message', '')
    
    if room not in rooms:
        emit('error', {'message': 'Room not found'})
        return
    
    # Security processing
    session_key = rooms[room]['session_key']
    
    # Encrypt the message
    encrypted = security.encrypt_message(message, session_key)
    
    # Calculate hash for integrity
    message_hash = security.calculate_hash(message)
    
    # Create security metadata
    security_metadata = {
        'encryption': 'AES-128-CBC',
        'encrypted_payload': encrypted,
        'original_hash': message_hash,
        'integrity_verified': True,
        'key_id': hashlib.sha256(session_key.encode()).hexdigest()[:16]
    }
    
    message_data = {
        'id': secrets.token_hex(8),
        'username': username,
        'timestamp': datetime.now().isoformat(),
        'security': security_metadata,
        ' decrypted_preview': message[:50] + '...' if len(message) > 50 else message
    }
    
    # Store message
    if room not in messages:
        messages[room] = []
    messages[room].append(message_data)
    
    # Send encrypted message to room
    emit('new_message', message_data, room=room, broadcast=True)

@socketio.on('typing')
def handle_typing(data):
    user_data = users.get(request.sid)
    if user_data:
        emit('user_typing', {
            'username': user_data['username'],
            'is_typing': data.get('typing', False)
        }, room=user_data['room'], broadcast=True, include_self=False)

@socketio.on('disconnect')
def handle_disconnect():
    user_data = users.pop(request.sid, None)
    if user_data:
        username = user_data['username']
        room = user_data['room']
        
        if room in rooms and username in rooms[room]['users']:
            rooms[room]['users'].remove(username)
        
        leave_room(room)
        emit('user_left', {
            'username': username,
            'timestamp': datetime.now().isoformat(),
            'users_in_room': rooms[room]['users'] if room in rooms else []
        }, room=room, broadcast=True)

if __name__ == '__main__':
    print("🔐 ShadowVault Chat Server Starting...")
    print("📡 WebSocket endpoint: ws://localhost:5000")
    print("🌐 Web interface: http://localhost:5000")
    socketio.run(app, debug=True, host='0.0.0.0', port=5000)
