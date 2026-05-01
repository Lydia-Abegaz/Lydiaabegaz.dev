"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Linkedin, MessageCircle } from "lucide-react";
import { useRef } from "react";

const socials = [
  { icon: Github,      href: "https://github.com/Lydia-Abegaz",                label: "GitHub" },
  { icon: Linkedin,    href: "https://www.linkedin.com/in/lydia-abegaz",        label: "LinkedIn" },
  { icon: MessageCircle, href: "https://t.me/Truth_seeker9",                    label: "Telegram" },
];

const floatingBadges = [
  { emoji: "⚡", label: "Blockchain Dev",  color: "from-olive-green to-forest-dark",  delay: 0 },
  { emoji: "🚀", label: "MERN Stack",      color: "from-sage to-forest-dark",       delay: 0.4 },
  { emoji: "🌍", label: "Ethiopia",        color: "from-pale-lime to-olive-green",  delay: 0.8 },
  { emoji: "🏆", label: "Hackathon '26",   color: "from-olive-green to-sage",       delay: 1.2 },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden aurora-bg"
    >
      {/* Animated mesh gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/5 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(99,107,47,0.18) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 80, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(186,192,149,0.15) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(212,222,149,0.12) 0%, transparent 70%)" }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-strong"
              style={{ border: "1px solid rgba(99,107,47,0.3)" }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-emerald-400">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="text-muted-foreground text-lg font-medium mb-2 tracking-wider">
                Hello, I&apos;m ✦
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-none">
                <span className="shimmer-text">Lidia</span>
                <br />
                <span className="text-foreground/90">Aliso</span>
              </h1>
            </motion.div>

            {/* Type animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-6"
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
              <div className="text-lg sm:text-xl font-medium" style={{ color: "hsl(var(--accent))" }}>
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer", 2200,
                    "Blockchain Developer", 2200,
                    "Soroban Smart Contracts", 2200,
                    "AI / ML Enthusiast", 2200,
                    "MERN Stack Expert", 2200,
                  ]}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                />
              </div>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Crafting digital experiences with code and creativity. I build modern,
              scalable web &amp; blockchain applications that merge elegant design with
              powerful functionality.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(124,58,237,0.5)" }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all"
                style={{
                  background: "linear-gradient(135deg, #636B2F, #D4DE95)",
                  boxShadow: "0 0 25px rgba(99, 107, 47, 0.35)",
                }}
              >
                View My Work
                <ArrowDown className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-sm text-muted-foreground">Find me on</span>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Fancy Avatar Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-center relative"
          >
            {/* Central glowing orb avatar */}
            <div className="relative">
              {/* Outer glow rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0%, #636B2F 25%, transparent 50%, #D4DE95 75%, transparent 100%)",
                  padding: 2,
                  borderRadius: "50%",
                }}
              >
                <div className="w-full h-full rounded-full" style={{ background: "hsl(var(--background))" }} />
              </motion.div>

              {/* Avatar container */}
              <div
                className="relative w-72 h-72 rounded-full flex items-center justify-center overflow-hidden"
                style={{
                  border: "2px solid transparent",
                  background: "linear-gradient(hsl(var(--card)), hsl(var(--card))) padding-box, linear-gradient(135deg, #636B2F, #BAC095, #D4DE95) border-box",
                  boxShadow: "0 0 60px rgba(99,107,47,0.3), 0 0 120px rgba(186,192,149,0.15), inset 0 0 60px rgba(99,107,47,0.1)",
                }}
              >
                {/* Inner mesh gradient */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, rgba(99,107,47,0.2) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(186,192,149,0.15) 0%, transparent 60%)",
                  }}
                />
                <div className="relative z-10 w-full h-full">
                  <img
                    src="/profile.jpg"
                    alt="Lidia Abegaz"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
              </div>

              {/* Orbiting dots */}
              {[0, 120, 240].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: ["#636B2F", "#BAC095", "#D4DE95"][i],
                    boxShadow: `0 0 10px ${["rgba(99,107,47,0.8)", "rgba(186,192,149,0.8)", "rgba(212,222,149,0.8)"][i]}`,
                    top: "50%",
                    left: "50%",
                    marginTop: -6,
                    marginLeft: -6,
                  }}
                  animate={{ rotate: [angle, angle + 360] }}
                  transition={{ duration: [8, 12, 10][i], repeat: Infinity, ease: "linear" }}
                  transformTemplate={({ rotate }) =>
                    `rotate(${rotate}) translateX(${155}px) rotate(-${rotate})`
                  }
                />
              ))}
            </div>

            {/* Floating badges */}
            {floatingBadges.map((badge, i) => {
              const positions = [
                { top: "-1rem", left: "-3rem" },
                { top: "-1rem", right: "-3rem" },
                { bottom: "3rem", left: "-4rem" },
                { bottom: "3rem", right: "-4rem" },
              ];
              return (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                  transition={{
                    opacity: { delay: badge.delay + 0.8, duration: 0.5 },
                    scale: { delay: badge.delay + 0.8, type: "spring", stiffness: 200 },
                    y: { delay: badge.delay + 1.2, duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute flex items-center gap-2 px-3 py-2 rounded-xl glass-strong text-xs font-semibold whitespace-nowrap"
                  style={{
                    ...positions[i],
                    border: "1px solid rgba(255,255,255,0.1)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  }}
                >
                  <span className="text-base">{badge.emoji}</span>
                  <span className="text-foreground/80">{badge.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
