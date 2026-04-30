"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { categories, toolTags } from "@/data/skills";

interface AnimatedBarProps {
  level: number;
  color: string;
  glow: string;
}

function AnimatedBar({ level, color, glow }: AnimatedBarProps) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-1.5 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: animated ? `${level}%` : 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, ${color}cc, ${color})`,
          boxShadow: `0 0 8px ${glow}`,
        }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,107,47,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="section-number">03.</span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        {/* Category Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              whileHover={{ scale: 1.01, boxShadow: `0 20px 60px ${cat.glow}` }}
              className="relative rounded-2xl p-6 overflow-hidden noise transition-all duration-300"
              style={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border) / 0.5)",
              }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-6 right-6 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${cat.color}80, transparent)` }} />

              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle, ${cat.glow} 0%, transparent 70%)` }} />

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${cat.glow}`, border: `1px solid ${cat.color}30` }}>
                  {cat.emoji}
                </div>
                <h3 className="text-xl font-bold" style={{ color: cat.color }}>{cat.title}</h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{skill.icon}</span>
                        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold tabular-nums" style={{ color: cat.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <AnimatedBar level={skill.level} color={cat.color} glow={cat.glow} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6"
          style={{
            background: "hsl(var(--card))",
            border: "1px solid hsl(var(--border) / 0.5)",
          }}
        >
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-5">
            Tools &amp; Platforms
          </p>
          <div className="flex flex-wrap gap-3">
            {toolTags.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="tag-pill cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
