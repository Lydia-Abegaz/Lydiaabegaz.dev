"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCaseStudyClient({ project }: { project: Project }) {
  const sections = [
    { title: "The Problem", icon: "🎯", content: project.caseStudy.problem },
    { title: "Architecture", icon: "🏗️", content: project.caseStudy.architecture },
    { title: "Challenges", icon: "⚡", content: project.caseStudy.challenges },
    { title: "Solution", icon: "✅", content: project.caseStudy.solution },
  ];

  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--background))" }}>
      {/* Hero Banner */}
      <div className="relative overflow-hidden">
        <div className={`h-72 sm:h-80 bg-gradient-to-br ${project.gradient} relative`}>
          {project.image && (
            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-5xl mx-auto px-6 pb-10 w-full">
              <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </Link>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4"
                  style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  {project.badge}
                </span>
                <h1 className="text-4xl sm:text-5xl font-black mb-3"
                  style={{
                    background: `linear-gradient(135deg, ${project.accentColor}, #D4DE95)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>{project.title}</h1>
                <p className="text-muted-foreground max-w-2xl text-lg">{project.description}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Action buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap gap-4 mb-16">
          {project.live !== "#" && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${project.accentColor}, #D4DE95)`, boxShadow: `0 0 25px ${project.glow}` }}>
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 glass-strong"
            style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
            <Github className="w-4 h-4" /> Source Code
          </a>
        </motion.div>

        {/* Tech Stack */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.caseStudy.techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-xl text-sm font-semibold"
                style={{ background: project.glow, color: project.accentColor, border: `1px solid ${project.accentColor}30` }}>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Case Study Sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <motion.div key={section.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border) / 0.5)" }}>
              <div className="absolute top-0 left-8 right-8 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}60, transparent)` }} />
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{section.icon}</span>
                <h3 className="text-xl font-bold text-foreground">{section.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Tags */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-16 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: project.glow, border: `1px solid ${project.accentColor}30`, color: project.accentColor }}>
              <ChevronRight className="w-3 h-3" /> {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
