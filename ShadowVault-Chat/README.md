# 🔐 ShadowVault Chat

**Secure Encrypted Messaging Platform** - A simplified showcase of cybersecurity encryption skills.

![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-3.0-green.svg)
![Encryption](https://img.shields.io/badge/Encryption-AES--128%20%7C%20RSA--2048-red.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 🛡️ Security Features

- **AES-128-CBC Encryption** - Military-grade symmetric encryption for messages
- **RSA-2048 Key Exchange** - Asymmetric cryptography for secure key distribution
- **SHA-256 Integrity** - Cryptographic hash verification for message authenticity
- **Perfect Forward Secrecy** - Session-based encryption keys
- **Digital Signatures** - Message authentication and non-repudiation
- **End-to-End Encryption** - Server cannot read message content
- **Real-time Security Visualization** - Live display of encryption in action

## 🚀 Quick Start

### Prerequisites
- Python 3.8 or higher
- pip package manager

### Installation

1. **Clone or download the project:**
```bash
cd ShadowVault-Chat
```

2. **Install dependencies:**
```bash
pip install -r requirements.txt
```

3. **Run the application:**
```bash
python app.py
```

4. **Open your browser:**
Navigate to `http://localhost:5000`

## 📸 Screenshots

The application features:
- Modern dark-themed cyberpunk UI
- Real-time encrypted messaging
- Live encryption visualization panel
- Security audit logs
- Typing indicators and user presence

## 🔧 Architecture

```
┌─────────────┐      WebSocket       ┌─────────────┐
│   Client    │ ◄──────────────────► │   Server    │
│  (Browser)  │   Encrypted Tunnel   │   (Flask)   │
└─────────────┘                      └─────────────┘
       │                                    │
       ▼                                    ▼
┌─────────────┐                      ┌─────────────┐
│  AES-128    │                      │  RSA-2048   │
│ Encryption  │                      │ Key Exchange│
└─────────────┘                      └─────────────┘
```

## 🎯 Why This Project?

This project demonstrates practical cybersecurity skills:

1. **Cryptographic Implementation** - Real encryption/decryption, not just theory
2. **Secure Protocol Design** - Understanding of key exchange and session management
3. **WebSocket Security** - Real-time secure communication channels
4. **UI/UX for Security** - Making encryption visible and understandable
5. **Full-Stack Development** - Backend + Frontend integration

## 📚 Code Highlights

### Encryption Implementation
```python
# Symmetric encryption using Fernet (AES-128-CBC)
def encrypt_message(message, key):
    f = Fernet(key.encode())
    encrypted = f.encrypt(message.encode())
    return base64.b64encode(encrypted).decode()

# Message integrity verification
def calculate_hash(message):
    return hashlib.sha256(message.encode()).hexdigest()
```

### Key Exchange
```python
# Generate RSA key pair for asymmetric encryption
private_key = rsa.generate_private_key(
    public_exponent=65537, 
    key_size=2048
)
public_key = private_key.public_key()
```

## 🌟 Features for Recruiters

- **Clean, commented code** - Easy to review and understand
- **Modern tech stack** - Flask, WebSockets, Cryptography library
- **Visual security demo** - Shows encryption working in real-time
- **Responsive design** - Works on desktop and mobile
- **No external dependencies** - Self-contained project
- **Production-ready patterns** - Proper error handling, logging, security

## 🔒 Security Note

This is an educational project demonstrating encryption concepts. While it uses real cryptographic implementations, additional security measures would be needed for production use:
- HTTPS/TLS for transport security
- Database persistence with encrypted storage
- Authentication and authorization system
- Rate limiting and input validation
- Security auditing and penetration testing

## 📄 License

MIT License - Feel free to use this project for your portfolio or learning!

## 👨‍💻 Author

Created as a cybersecurity portfolio project demonstrating practical encryption skills.

---

**🎓 Showcase Your Cybersecurity Skills!**

This project is perfect for demonstrating:
- Understanding of cryptographic algorithms
- Secure coding practices
- Full-stack development capability
- Real-time application architecture
- UI/UX design for technical applications
