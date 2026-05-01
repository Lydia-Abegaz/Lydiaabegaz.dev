"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  life: number;
  maxLife: number;
}

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  trail: { x: number; y: number }[];
}

const COLORS = [
  "99, 107, 47",    // Deep Olive
  "186, 192, 149",   // Sage
  "212, 222, 149",   // Pale Lime
  "61, 65, 39",     // Dark Forest
];

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];
    let stars: Star[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let tick = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Spawn particles near mouse continuously
      if (Math.random() < 0.3) {
        spawnParticle(mouseX + (Math.random() - 0.5) * 40, mouseY + (Math.random() - 0.5) * 40);
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    function spawnParticle(x: number, y: number) {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5 - 0.5,
        size: Math.random() * 3 + 1,
        alpha: 0.8,
        color,
        life: 0,
        maxLife: 60 + Math.random() * 60,
      });
    }

    function spawnStar() {
      if (!canvas) return;
      const edge = Math.floor(Math.random() * 4);
      let x = 0, y = 0, vx = 0, vy = 0;
      const speed = 3 + Math.random() * 5;
      if (edge === 0) { x = Math.random() * canvas.width; y = 0; vx = (Math.random() - 0.5); vy = speed; }
      else if (edge === 1) { x = canvas.width; y = Math.random() * canvas.height; vx = -speed; vy = (Math.random() - 0.5); }
      else if (edge === 2) { x = Math.random() * canvas.width; y = canvas.height; vx = (Math.random() - 0.5); vy = -speed; }
      else { x = 0; y = Math.random() * canvas.height; vx = speed; vy = (Math.random() - 0.5); }

      stars.push({ x, y, vx, vy, size: Math.random() * 1.5 + 0.5, alpha: 1, trail: [] });
    }

    // Initial ambient particles
    for (let i = 0; i < 60; i++) {
      spawnParticle(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    }

    function drawAuroraBlob(cx: number, cy: number, rx: number, ry: number, color: string, alpha: number) {
      const grd = ctx!.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rx, ry));
      grd.addColorStop(0, `rgba(${color}, ${alpha})`);
      grd.addColorStop(1, `rgba(${color}, 0)`);
      ctx!.save();
      ctx!.scale(rx / Math.max(rx, ry), ry / Math.max(rx, ry));
      ctx!.beginPath();
      ctx!.arc(cx / (rx / Math.max(rx, ry)), cy / (ry / Math.max(rx, ry)), Math.max(rx, ry), 0, Math.PI * 2);
      ctx!.fillStyle = grd;
      ctx!.fill();
      ctx!.restore();
    }

    function draw() {
      tick++;
      if (!canvas || !ctx) return;
      ctx!.clearRect(0, 0, canvas.width, canvas.height);

      // Aurora blobs
      const t = tick * 0.005;
      ctx!.save();
      ctx!.globalCompositeOperation = "screen";

      drawAuroraBlob(
        canvas.width * 0.2 + Math.sin(t) * 80,
        canvas.height * 0.3 + Math.cos(t * 0.7) * 60,
        300, 200,
        "99, 107, 47", 0.06
      );
      drawAuroraBlob(
        canvas.width * 0.8 + Math.cos(t * 0.8) * 80,
        canvas.height * 0.2 + Math.sin(t * 1.1) * 50,
        250, 180,
        "186, 192, 149", 0.05
      );
      drawAuroraBlob(
        canvas.width * 0.5 + Math.sin(t * 0.6) * 100,
        canvas.height * 0.7 + Math.cos(t * 0.9) * 70,
        280, 200,
        "212, 222, 149", 0.04
      );
      ctx!.restore();

      // Spawn ambient particles
      if (tick % 8 === 0) {
        spawnParticle(Math.random() * canvas.width, Math.random() * canvas.height);
      }

      // Occasionally spawn shooting stars
      if (tick % 120 === 0 && Math.random() < 0.5) {
        spawnStar();
      }

      // Draw particles
      ctx!.save();
      ctx!.globalCompositeOperation = "screen";
      particles = particles.filter((p) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.01; // gentle rise
        const progress = p.life / p.maxLife;
        p.alpha = progress < 0.2
          ? progress / 0.2 * 0.6
          : (1 - (progress - 0.2) / 0.8) * 0.6;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx!.shadowBlur = 8;
        ctx!.shadowColor = `rgba(${p.color}, 0.8)`;
        ctx!.fill();
        ctx!.shadowBlur = 0;

        return p.life < p.maxLife;
      });

      // Draw shooting stars
      stars = stars.filter((s) => {
        s.trail.unshift({ x: s.x, y: s.y });
        if (s.trail.length > 20) s.trail.pop();

        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 0.015;

        if (s.alpha <= 0) return false;
        if (s.x < -50 || s.x > canvas.width + 50 || s.y < -50 || s.y > canvas.height + 50) return false;

        // Draw trail
        for (let i = 0; i < s.trail.length; i++) {
          const a = (1 - i / s.trail.length) * s.alpha * 0.4;
          const r = s.size * (1 - i / s.trail.length);
          ctx!.beginPath();
          ctx!.arc(s.trail[i].x, s.trail[i].y, r, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(212, 222, 149, ${a})`;
          ctx!.fill();
        }

        // Star head
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx!.shadowBlur = 10;
        ctx!.shadowColor = "rgba(186, 192, 149, 1)";
        ctx!.fill();
        ctx!.shadowBlur = 0;

        return true;
      });

      ctx!.restore();

      // Grid dots (subtle)
      ctx!.save();
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const glow = Math.max(0, 1 - dist / 200);
          ctx!.beginPath();
          ctx!.arc(x, y, 0.8 + glow * 1.5, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(99, 107, 47, ${0.1 + glow * 0.4})`;
          ctx!.fill();
        }
      }
      ctx!.restore();

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  );
}
