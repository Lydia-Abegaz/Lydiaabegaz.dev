"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";
import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,107,47,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="section-number">02.</span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black">
            My <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, transparent, rgba(99,107,47,0.5) 20%, rgba(186,192,149,0.5) 80%, transparent)" }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.period}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-20"
              >
                {/* Timeline node */}
                <div className="absolute left-0 top-6 flex items-center justify-center">
                  <motion.div
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${exp.glowColor}, rgba(0,0,0,0.5))`,
                      border: `1px solid ${exp.color}40`,
                      boxShadow: `0 0 20px ${exp.glowColor}`,
                    }}
                  >
                    <Briefcase className="w-6 h-6" style={{ color: exp.color }} />
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    scale: 1.01,
                    boxShadow: `0 20px 60px ${exp.glowColor}`,
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative rounded-2xl overflow-hidden p-6 transition-all duration-300"
                  style={{
                    background: "hsl(var(--card))",
                    border: `1px solid hsl(var(--border) / 0.5)`,
                  }}
                >
                  {/* Left color accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                    style={{ background: `linear-gradient(180deg, ${exp.color}, transparent)` }}
                  />

                  {/* Hover glow overlay */}
                  <div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at top left, ${exp.glowColor} 0%, transparent 60%)` }}
                  />

                  <div className="relative z-10">
                    {/* Title row */}
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                        <p className="font-semibold text-sm" style={{ color: exp.color }}>{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.description}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full"
                          style={{
                            background: `${exp.glowColor}`,
                            border: `1px solid ${exp.color}30`,
                            color: exp.color,
                          }}
                        >
                          <ChevronRight className="w-2.5 h-2.5" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
