"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/theme-toggle";
import LALogo from "@/components/la-logo";

const navItems = [
  { name: "Home",       href: "#home" },
  { name: "About",      href: "#about" },
  { name: "Projects",   href: "#projects" },
  { name: "Contacts",   href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isMobileMenuOpen, setIsMobile]     = useState(false);
  const [activeSection, setActiveSection]   = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = [...navItems].filter(i => i.href.startsWith("#")).map((i) => i.href.slice(1)).reverse();
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsMobile(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Glass pill container */}
        <div className="max-w-6xl mx-auto px-6">
          <div
            className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
              isScrolled
                ? "glass-strong shadow-2xl shadow-black/40"
                : "bg-transparent"
            }`}
          >
            {/* Logo */}
            <motion.button
              onClick={() => handleNav("#home")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 group"
            >
              <LALogo size="md" animated={true} />
              <span className="text-lg font-bold text-foreground hidden sm:block">
                Lidia<span className="text-foreground/50"> Aliso</span>
              </span>
            </motion.button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, i) => {
                const isHash = item.href.startsWith("#");
                const isActive = isHash 
                  ? (activeSection === item.href.slice(1) && pathname === "/")
                  : pathname.startsWith(item.href);

                if (isHash) {
                  return (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 }}
                      onClick={() => handleNav(item.href)}
                      className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="navPill"
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: "linear-gradient(135deg, rgba(99, 107, 47, 0.15), rgba(186, 192, 149, 0.1))",
                            border: "1px solid rgba(99, 107, 47, 0.25)",
                          }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </motion.button>
                  );
                }
                return (
                  <motion.div key={item.name} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                    <Link 
                      href={item.href} 
                      className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="navPill"
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: "linear-gradient(135deg, rgba(99, 107, 47, 0.15), rgba(186, 192, 149, 0.1))",
                            border: "1px solid rgba(99, 107, 47, 0.25)",
                          }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA + Theme Toggle */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <motion.button
                onClick={() => handleNav("#contact")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
                  boxShadow: "0 0 20px var(--glow-primary)",
                }}
              >
                Let&apos;s Talk ✦
              </motion.button>

              <button
                className="md:hidden p-2 rounded-xl glass text-foreground"
                onClick={() => setIsMobile(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
            style={{ background: "hsl(var(--background) / 0.98)", backdropFilter: "blur(40px)" }}
          >
            {navItems.map((item, i) => {
              const isHash = item.href.startsWith("#");
              const isActive = isHash 
                ? (activeSection === item.href.slice(1) && pathname === "/")
                : pathname.startsWith(item.href);

              if (isHash) {
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleNav(item.href)}
                    className="text-3xl font-bold py-4 transition-all"
                    style={{
                      color: isActive ? "transparent" : "hsl(220 20% 60%)",
                      background: isActive ? "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))" : "none",
                      WebkitBackgroundClip: isActive ? "text" : "none",
                      WebkitTextFillColor: isActive ? "transparent" : undefined,
                    }}
                  >
                    {item.name}
                  </motion.button>
                );
              }
              return (
                <motion.div key={item.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: i * 0.06 }}>
                  <Link 
                    href={item.href} 
                    onClick={() => setIsMobile(false)} 
                    className="text-3xl font-bold py-4 transition-all" 
                    style={{ 
                      color: isActive ? "transparent" : "hsl(220 20% 60%)",
                      background: isActive ? "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))" : "none",
                      WebkitBackgroundClip: isActive ? "text" : "none",
                      WebkitTextFillColor: isActive ? "transparent" : undefined,
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
