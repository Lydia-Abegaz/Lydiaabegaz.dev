"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, MessageCircle, ArrowUp, Code2 } from "lucide-react";
import Link from "next/link";

const links = [
  { name: "Home",       href: "#home" },
  { name: "About",      href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills",     href: "#skills" },
  { name: "Projects",   href: "#projects" },
  { name: "Contact",    href: "#contact" },
  { name: "Blog",       href: "/blog" },
];

const socials = [
  { icon: Github,        href: "https://github.com/Lydia-Aliso",             label: "GitHub" },
  { icon: Linkedin,      href: "https://www.linkedin.com/in/lydia-aliso",    label: "LinkedIn" },
  { icon: MessageCircle, href: "https://t.me/Truth_seeker9",                  label: "Telegram" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-8">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(99,107,47,0.5), rgba(212,222,149,0.5), transparent)" }} />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(99,107,47,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 pb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <a href="#home" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-10 h-10">
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-[2px] bg-background rounded-[10px] flex items-center justify-center">
                  <span className="text-xs font-bold gradient-text">LA</span>
                </div>
              </div>
              <span className="text-xl font-black gradient-text">Lidia Aliso</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Building digital experiences with passion and precision. Always learning, always shipping.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.92 }}
                  className="group w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border) / 0.5)",
                  }}
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-5">Navigation</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="w-0 h-px group-hover:w-4 transition-all duration-300"
                        style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))" }} />
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="w-0 h-px group-hover:w-4 transition-all duration-300"
                        style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))" }} />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact snippets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-5">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>📧 lydiaabegaz@gmail.com</p>
              <p>📱 +251 927 197 935</p>
              <p>📍 Kotebe, Addis Ababa 🇪🇹</p>
            </div>

            {/* Stack badge */}
            <div className="mt-6 p-3 rounded-xl inline-block"
              style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border) / 0.5)" }}>
              <p className="text-xs text-muted-foreground mb-1.5">Built with</p>
              <div className="flex items-center gap-1.5 flex-wrap">
                {["Next.js", "TypeScript", "Framer Motion", "Tailwind"].map((tech) => (
                  <span key={tech} className="text-xs px-2 py-0.5 rounded-md font-medium"
                    style={{ background: "var(--glow-primary)", color: "hsl(var(--primary))", border: "1px solid hsl(var(--primary)/0.2)" }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)" }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground flex items-center gap-2"
          >
            © {new Date().getFullYear()} Lidia Aliso · Crafted with
            <Heart className="w-3.5 h-3.5 text-rose-500 inline" />
            in Ethiopia
          </motion.p>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1, y: -3, boxShadow: "0 0 20px rgba(99,107,47,0.4)" }}
            whileTap={{ scale: 0.92 }}
            className="group w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
              boxShadow: "0 0 15px var(--glow-primary)",
            }}
          >
            <ArrowUp className="w-4 h-4 text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
