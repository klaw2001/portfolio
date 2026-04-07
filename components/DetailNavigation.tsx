"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function DetailNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "glass-navbar border-b border-white/[0.06]"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          {/* Logo — links to homepage */}
          <Link
            href="/"
            className="font-mono text-white font-bold text-lg tracking-tight hover:text-zinc-400 transition-colors duration-200"
          >
            HN
          </Link>

          {/* Desktop Links — link to homepage sections */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${link.href}`}
                className="relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 text-zinc-500 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/80 border border-white/[0.12] rounded-lg hover:border-white/25 hover:text-white transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-1">
            <button
              className="text-zinc-500 hover:text-white transition-colors p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass-navbar border-b border-white/[0.06] md:hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-left px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-zinc-500 mt-2"
                onClick={() => setMobileOpen(false)}
              >
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
