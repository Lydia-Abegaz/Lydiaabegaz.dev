"use client";

import { motion } from "framer-motion";

interface LALogoProps {
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

export default function LALogo({ size = "md", animated = true }: LALogoProps) {
  const sizes = {
    sm: { container: 36, font: "text-xs" },
    md: { container: 40, font: "text-sm" },
    lg: { container: 56, font: "text-lg" },
  };

  const { container, font } = sizes[size];

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: container, height: container }}
    >
      {/* Outer rotating ring */}
      {animated && (
        <>
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)), hsl(var(--primary)))",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          {/* Glow effect */}
          <motion.div
            className="absolute -inset-1 rounded-2xl blur-md opacity-50"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Inner static border gradient */}
      {!animated && (
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
          }}
        />
      )}

      {/* Inner content */}
      <motion.div
        className="absolute inset-[2px] bg-background rounded-[14px] flex items-center justify-center overflow-hidden"
        whileHover={animated ? { scale: 1.05 } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Subtle inner gradient */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)), transparent)",
          }}
        />

        {/* LA Text with creative styling */}
        <span
          className={`relative font-black ${font} tracking-tight z-10`}
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          <motion.span
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            L
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              display: "inline-block",
              transform: "translateY(-1px)",
            }}
          >
            A
          </motion.span>
        </span>

        {/* Decorative dot */}
        {animated && (
          <motion.div
            className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full"
            style={{ background: "hsl(var(--accent))" }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </motion.div>
    </div>
  );
}
