"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle, Award, CheckCircle2 } from "lucide-react";

const contactInfo = [
  { icon: Mail,         label: "Email",        value: "lydiaabegaz@gmail.com",    href: "mailto:lydiaabegaz@gmail.com", color: "hsl(var(--primary))", glow: "var(--glow-primary)" },
  { icon: Phone,        label: "Phone",        value: "+251 927 197 935",          href: "tel:+251927197935",            color: "hsl(var(--accent))", glow: "var(--glow-secondary)"  },
  { icon: MapPin,       label: "Location",     value: "Addis Ababa, Ethiopia",     href: "#",                            color: "hsl(var(--primary))", glow: "var(--glow-primary)" },
  { icon: Award,        label: "Certificates", value: "View Certificates →",       href: "https://drive.google.com/drive/folders/1vub1QQV6uM7hiOzmwryP-AR63oRAhYvL?usp=sharing", color: "hsl(var(--accent))", glow: "var(--glow-secondary)" },
];

const socialLinks = [
  { icon: Linkedin,       href: "https://www.linkedin.com/in/lydia-aliso",  label: "LinkedIn",  color: "hsl(201 100% 50%)" },
  { icon: Github,         href: "https://github.com/Lydia-Aliso",           label: "GitHub",    color: "hsl(220 20% 97%)"  },
  { icon: MessageCircle,  href: "https://t.me/Truth_seeker9",                 label: "Telegram",  color: "hsl(200 90% 55%)"  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }
      setIsSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 rounded-xl bg-background/50 outline-none transition-all duration-300 font-medium text-sm text-foreground placeholder:text-muted-foreground/50 ${
      focused === field
        ? "border-primary/60 shadow-[0_0_0_3px_hsl(var(--glow-primary))]"
        : "border-white/8 hover:border-white/15"
    }`;

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* BG blobs */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(251,146,60,0.07) 0%, transparent 70%)" }} />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(254,215,170,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="section-number">06.</span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            Open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.03, boxShadow: `0 20px 40px ${item.glow}` }}
                  className="group p-5 rounded-2xl relative overflow-hidden transition-all duration-300"
                  style={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border) / 0.5)",
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle at top left, ${item.glow} 0%, transparent 60%)` }} />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: item.glow, border: `1px solid ${item.color}30` }}>
                      <item.icon className="w-4.5 h-4.5" style={{ color: item.color }} />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-sm font-semibold text-foreground/90 break-words">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="group w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border) / 0.5)",
                    }}
                    aria-label={s.label}
                  >
                    <s.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl p-8 overflow-hidden"
            style={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border) / 0.5)",
              boxShadow: "0 20px 80px rgba(0,0,0,0.4)",
            }}
          >
            {/* Form top gradient line */}
            <div className="absolute top-0 left-8 right-8 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(99,107,47,0.6), rgba(186,192,149,0.6), transparent)" }} />

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-16 gap-5"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(6,182,212,0.1))", border: "2px solid rgba(16,185,129,0.5)" }}
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </motion.div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">Message Sent! 🎉</h3>
                    <p className="text-muted-foreground text-sm">Thanks for reaching out — I&apos;ll get back to you soon.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {(["name", "email"] as const).map((field) => (
                      <div key={field}>
                        <label className="block text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wider">
                          {field === "name" ? "Your Name" : "Email Address"}
                        </label>
                        <input
                          type={field === "email" ? "email" : "text"}
                          value={form[field]}
                          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                          onFocus={() => setFocused(field)}
                          onBlur={() => setFocused(null)}
                          required
                          className={inputClass(field)}
                          style={{ border: `1px solid ${focused === field ? "rgba(99,107,47,0.6)" : "hsl(var(--border) / 0.5)"}` }}
                          placeholder={field === "name" ? "Lydia Abegaz" : "hello@email.com"}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused(null)}
                      className={inputClass("subject")}
                      style={{ border: `1px solid ${focused === "subject" ? "rgba(186,192,149,0.6)" : "rgba(255,255,255,0.08)"}` }}
                      placeholder="Project collaboration, job offer..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wider">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      required
                      rows={5}
                      className={`${inputClass("message")} resize-none`}
                      style={{ border: `1px solid ${focused === "message" ? "rgba(186,192,149,0.6)" : "rgba(255,255,255,0.08)"}` }}
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(96,108,56,0.5)" }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2.5 transition-all"
                    style={{
                      background: "linear-gradient(135deg, #636B2F, #D4DE95)",
                      boxShadow: "0 0 25px rgba(99,107,47,0.3)",
                      opacity: isSubmitting ? 0.7 : 1,
                    }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message ✦
                      </>
                    )}
                  </motion.button>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-center font-medium mt-3"
                      style={{ color: "hsl(var(--destructive))" }}
                    >
                      {error}
                    </motion.p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
