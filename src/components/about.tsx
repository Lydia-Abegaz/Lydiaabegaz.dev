"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Cpu, Zap, Globe, Heart } from "lucide-react";

const bentoItems = [
  {
    id: "who",
    className: "col-span-2",
    content: (
      <div>
        <p className="text-xs font-semibold tracking-widest text-primary/70 uppercase mb-3">Who I am</p>
        <h3 className="text-2xl font-bold text-foreground mb-3">
          Software Engineering Student &amp;{" "}
          <span className="gradient-text">Blockchain Developer</span>
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          Motivated Software Engineering student at{" "}
          <span className="text-foreground font-semibold">AASTU</span> with strong
          foundations in full-stack development, AI/ML, and blockchain. Passionate
          about building scalable solutions that create real social impact.
        </p>
      </div>
    ),
  },
  {
    id: "location",
    className: "col-span-1",
    content: (
      <div className="flex flex-col h-full">
        <MapPin className="w-7 h-7 mb-4" style={{ color: "#D4DE95" }} />
        <p className="text-xs text-muted-foreground mb-1">Based in</p>
        <p className="text-lg font-bold text-foreground">Addis Ababa</p>
        <p className="text-sm text-muted-foreground">Ethiopia 🇪🇹</p>
        <div className="mt-auto pt-4">
          <div className="h-px" style={{ background: "linear-gradient(90deg, #D4DE95 / 0.5, transparent)" }} />
        </div>
      </div>
    ),
  },
  {
    id: "education",
    className: "col-span-1",
    content: (
      <div className="flex flex-col h-full">
        <GraduationCap className="w-7 h-7 mb-4" style={{ color: "#BAC095" }} />
        <p className="text-xs text-muted-foreground mb-1">Studying at</p>
        <p className="text-lg font-bold text-foreground">AASTU</p>
        <p className="text-sm text-muted-foreground">B.Sc Software Engineering</p>
      </div>
    ),
  },
  {
    id: "focus",
    className: "col-span-1",
    content: (
      <div className="flex flex-col h-full">
        <Cpu className="w-7 h-7 mb-4" style={{ color: "#636B2F" }} />
        <p className="text-xs text-muted-foreground mb-1">Currently focused on</p>
        <p className="text-lg font-bold gradient-text">Blockchain + AI</p>
        <p className="text-sm text-muted-foreground mt-1">Soroban • MERN Stack</p>
      </div>
    ),
  },
  {
    id: "passion",
    className: "col-span-2",
    content: (
      <div>
        <p className="text-xs font-semibold tracking-widest text-primary/70 uppercase mb-3">My Approach</p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Zap, label: "Performance", desc: "Fast & efficient code" },
            { icon: Globe, label: "Impact", desc: "Social value at scale" },
            { icon: Heart, label: "Passion", desc: "Love what I build" },
          ].map((item) => (
            <div key={item.label} className="text-center p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.04)" }}>
              <item.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
              <p className="text-xs font-semibold text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "status",
    className: "col-span-1",
    content: (
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-xs font-semibold text-emerald-400">Open to Work</span>
          </div>
          <p className="text-sm text-muted-foreground">Seeking internship &amp; project opportunities in software engineering, blockchain, or AI/ML.</p>
        </div>
      </div>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Subtle bg decoration */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,107,47,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="section-number">01.</span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Avatar column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1 flex justify-center"
          >
            <div className="relative">
              {/* Profile frame */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative w-64 h-64 rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(hsl(var(--card)), hsl(var(--card))) padding-box, linear-gradient(135deg, #636B2F, #D4DE95, #BAC095) border-box",
                  border: "2px solid transparent",
                  boxShadow: "0 0 50px rgba(99,107,47,0.25), 0 30px 60px rgba(0,0,0,0.4)",
                }}
              >
                <div className="absolute inset-0 mesh-bg" />
                <div className="absolute inset-0 z-10">
                  <img
                    src="/profile.jpg"
                    alt="Lidia Aliso"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay for text readability */}
                  <div className="absolute inset-x-0 bottom-0 py-4 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex flex-col items-center justify-center">
                    <p className="font-bold text-lg gradient-text">Lidia Aliso</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground/80">Software Engineer</p>
                  </div>
                </div>
              </motion.div>

              {/* Corner decoration */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
                style={{ background: "linear-gradient(135deg, rgba(99,107,47,0.3), rgba(212,222,149,0.2))" }}
              />
              <div
                className="absolute -top-4 -left-4 w-16 h-16 rounded-xl -z-10"
                style={{ background: "linear-gradient(135deg, rgba(186,192,149,0.3), rgba(99,107,47,0.2))" }}
              />
            </div>
          </motion.div>

          {/* Bento grid */}
          <div className="lg:col-span-2 grid grid-cols-3 gap-4">
            {bentoItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 60px rgba(124,58,237,0.15)",
                }}
                className={`${item.className} p-5 rounded-2xl relative noise transition-all duration-300`}
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border) / 0.5)",
                }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(99,107,47,0.06) 0%, rgba(186,192,149,0.04) 100%)" }} />
                <div className="relative z-10">{item.content}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
