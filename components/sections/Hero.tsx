"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const phrases = [
  { prefix: "Hrishikesh", highlight: "Netke" },
  { prefix: "Software", highlight: "Developer" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollY } = useScroll();
  const decoratorY = useTransform(scrollY, [0, 500], [0, -60]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise-texture"
    >
      {/* Background radial gradient — parallax */}
      <motion.div
        aria-hidden
        style={{ y: decoratorY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(113,113,122,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(82,82,91,0.06) 0%, transparent 60%)",
          }}
        />
      </motion.div>

      {/* Grid lines — parallax, subtle */}
      <motion.div
        aria-hidden
        style={{ y: decoratorY }}
        className="absolute inset-0 pointer-events-none opacity-30"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 glow-green">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-semibold text-foreground dark:text-white leading-[1.05] tracking-tight mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              {phrases[currentIndex].prefix}{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {phrases[currentIndex].highlight}
              </span>
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground dark:text-gray-400 leading-relaxed max-w-2xl mb-4"
        >
          Building full-stack products end-to-end.
          Currently shipping at{" "}
          <span className="text-foreground dark:text-white font-medium">AI Tiger</span>, based in{" "}
          <span className="text-foreground dark:text-white font-medium">Mumbai, India</span>.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm text-muted-foreground/60 dark:text-gray-600 mb-10"
        >
          2.7 years · Next.js · TypeScript · OpenAI · Docker · PostgreSQL
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.button
            onClick={scrollToWork}
            whileHover={{ y: -2, boxShadow: "0 12px 40px rgba(113,113,122,0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-all duration-200"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-gray-600 dark:text-gray-300 border border-black/20 dark:border-white/20 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-gray-900 dark:hover:text-zinc-200 transition-all duration-200"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToWork}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
