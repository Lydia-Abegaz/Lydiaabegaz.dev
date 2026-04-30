"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 400);
          return 100;
        }
        return p + Math.random() * 12 + 4;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: "hsl(var(--background))" }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-80 h-80 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(96, 108, 56, 0.3) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        className="absolute w-60 h-60 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(221, 161, 94, 0.2) 0%, transparent 70%)",
          right: "30%",
          top: "40%",
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative w-20 h-20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "conic-gradient(from 0deg, #606c38, #283618, #dda15e, #606c38)",
              padding: 2,
              borderRadius: 18,
            }}
          >
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: "hsl(var(--background))", borderRadius: 16 }}
            />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-xl font-black"
              style={{
                background: "linear-gradient(135deg, #606c38, #283618)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              LA
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p
            className="text-2xl font-black mb-1"
            style={{
              background: "linear-gradient(135deg, #606c38, #283618)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Lidia Aliso
          </p>
          <p className="text-sm text-muted-foreground">Loading experience...</p>
        </motion.div>
        <div className="w-48 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
          <motion.div
            style={{ width: `${Math.min(progress, 100)}%` }}
            className="h-full rounded-full"
            transition={{ ease: "linear" }}
            animate={{
              background: [
                "linear-gradient(90deg, #606c38, #283618)",
                "linear-gradient(90deg, #283618, #dda15e)",
                "linear-gradient(90deg, #dda15e, #606c38)",
              ],
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
