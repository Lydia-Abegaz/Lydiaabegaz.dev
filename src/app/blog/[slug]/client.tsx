"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-foreground mt-8 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-2 text-muted-foreground my-4 pl-2">
          {items.map((item, j) => (
            <li key={j} className="leading-relaxed">{formatInlineCode(item)}</li>
          ))}
        </ul>
      );
      continue;
    } else if (line.startsWith("1. ")) {
      const items: string[] = [];
      let idx = i;
      while (idx < lines.length && /^\d+\. /.test(lines[idx])) {
        items.push(lines[idx].replace(/^\d+\. /, ""));
        idx++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal list-inside space-y-2 text-muted-foreground my-4 pl-2">
          {items.map((item, j) => (
            <li key={j} className="leading-relaxed">{formatInlineCode(item)}</li>
          ))}
        </ol>
      );
      i = idx;
      continue;
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      elements.push(
        <p key={i} className="text-muted-foreground leading-relaxed my-4">
          {formatInlineCode(line)}
        </p>
      );
    }
    i++;
  }
  return elements;
}

function formatInlineCode(text: string): React.ReactNode {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={i} className="px-1.5 py-0.5 rounded-md text-xs font-mono"
          style={{ background: "rgba(99,107,47,0.15)", color: "#D4DE95", border: "1px solid rgba(99,107,47,0.2)" }}>
          {part.slice(1, -1)}
        </code>
      );
    }
    // Bold
    const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
    return boldParts.map((bp, j) => {
      if (bp.startsWith("**") && bp.endsWith("**")) {
        return <strong key={`${i}-${j}`} className="text-foreground font-semibold">{bp.slice(2, -2)}</strong>;
      }
      // Italic
      const italicParts = bp.split(/(\*[^*]+\*)/g);
      return italicParts.map((ip, k) => {
        if (ip.startsWith("*") && ip.endsWith("*")) {
          return <em key={`${i}-${j}-${k}`}>{ip.slice(1, -1)}</em>;
        }
        return ip;
      });
    });
  });
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--background))" }}>
      <div className="relative pt-32 pb-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${post.glow} 0%, transparent 70%)` }} />
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  style={{ background: post.glow, color: post.accent, border: `1px solid ${post.accent}25` }}>
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight"
              style={{
                background: `linear-gradient(135deg, ${post.accent}, #D4DE95)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2" suppressHydrationWarning>
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto px-6 pb-24">
        <div className="h-px mb-10" style={{ background: `linear-gradient(90deg, transparent, ${post.accent}40, transparent)` }} />
        <div className="prose-custom">
          {renderMarkdown(post.content)}
        </div>
      </motion.article>
    </div>
  );
}
