"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Star, FileText } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function TiltCard({ children, className = "", style }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-background">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-foreground inline-block relative">
            Projects
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>
          </h2>
        </motion.div>

        {/* Featured row */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard
                className="group relative rounded-3xl overflow-hidden h-full"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border) / 0.5)",
                  boxShadow: `0 0 0 0 ${project.glow}`,
                  transition: "box-shadow 0.3s ease",
                }}
              >
                {/* Gradient top image area */}
                <div className={`relative h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  {/* Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white z-20"
                    style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)" }}>
                    {project.badge}
                  </div>

                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-60 transition-all duration-700 ease-in-out"
                    />
                  ) : (
                    <motion.span
                      animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="text-8xl drop-shadow-2xl select-none"
                      style={{ filter: `drop-shadow(0 0 30px rgba(255,255,255,0.3))` }}
                    >
                      {project.emoji}
                    </motion.span>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    <motion.div whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.92 }}>
                      <Link href={`/projects/${project.slug}`}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm text-white"
                        style={{ background: project.accentColor, boxShadow: `0 0 20px ${project.glow}` }}
                      >
                        <FileText className="w-4 h-4" /> Case Study
                      </Link>
                    </motion.div>
                    <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.92 }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm glass-strong border border-white/20"
                    >
                      <Github className="w-4 h-4" /> Code
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Link href={`/projects/${project.slug}`}>
                      <h3 className="text-xl font-bold group-hover:text-transparent transition-all duration-300 cursor-pointer"
                        style={{ background: `linear-gradient(135deg, ${project.accentColor}, hsl(var(--accent)))`,
                          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                      >
                        {project.title}
                      </h3>
                    </Link>
                    <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill" style={{
                        color: project.accentColor,
                        background: `${project.glow}`,
                        border: `1px solid ${project.accentColor}30`,
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <TiltCard
                className="group relative rounded-2xl overflow-hidden h-full"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border) / 0.5)",
                }}
              >
                <div className={`relative h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-50 transition-all duration-700 ease-in-out" />
                  ) : (
                    <span className="text-6xl select-none">{project.emoji}</span>
                  )}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-white z-20"
                    style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}>
                    {project.badge}
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Link href={`/projects/${project.slug}`} className="glass px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" /> Case Study
                      </Link>
                    </motion.div>
                    <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }} className="glass px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5">
                      <Github className="w-3.5 h-3.5" /> Code
                    </motion.a>
                  </div>
                </div>
                <div className="p-5">
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-lg font-bold mb-2 cursor-pointer transition-colors" style={{ color: project.accentColor }}>{project.title}</h3>
                  </Link>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill" style={{
                        color: project.accentColor,
                        background: `${project.glow}`,
                        border: `1px solid ${project.accentColor}25`,
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/Lydia-Abegaz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(96,108,56,0.4)" }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-semibold text-white transition-all"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
              boxShadow: "0 0 25px var(--glow-primary)",
            }}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
