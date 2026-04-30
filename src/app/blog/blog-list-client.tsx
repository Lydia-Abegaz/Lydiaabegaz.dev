"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--background))" }}>
      {/* Header */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(99,107,47,0.12) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(212,222,149,0.1) 0%, transparent 70%)" }} />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-sm gradient-text">~/blog</span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-black mb-4">
              Technical <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Insights on blockchain development, full-stack engineering, and lessons learned from hackathons.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid gap-8">
          {posts.map((post, i) => (
            <motion.div key={post.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}>
              <Link href={`/blog/${post.slug}`}>
                <div className="group rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:scale-[1.01]"
                  style={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border) / 0.5)",
                    boxShadow: "0 0 0 0 transparent",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 20px 60px ${post.glow}`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 0 0 transparent"; }}>
                  <div className="absolute top-0 left-8 right-8 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${post.accent}60, transparent)` }} />
                  <div className="flex items-start gap-6">
                    <div className="hidden sm:flex w-16 h-16 rounded-2xl items-center justify-center text-3xl flex-shrink-0"
                      style={{ background: post.glow, border: `1px solid ${post.accent}30` }}>
                      {post.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                            style={{ background: post.glow, color: post.accent, border: `1px solid ${post.accent}25` }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-transparent transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${post.accent}, #D4DE95)`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}>
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5" suppressHydrationWarning>
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                        <span className="ml-auto flex items-center gap-1 font-semibold group-hover:gap-2 transition-all" style={{ color: post.accent }}>
                          Read more <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
