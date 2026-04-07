"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { socialLinks } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 md:py-40 bg-transparent relative overflow-hidden"
    >
      {/* Background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(113,113,122,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Label */}
          <motion.p variants={itemVariants} className="section-label mb-6">
            Contact
          </motion.p>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-semibold text-foreground dark:text-white leading-tight mb-6"
          >
            Let&apos;s build something{" "}
            <span className="text-muted-foreground dark:text-zinc-400">
              together.
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground dark:text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Available for new projects, consulting, or full-time roles.
            Let&apos;s talk about what you&apos;re building.
          </motion.p>

          {/* Email */}
          <motion.a
            variants={itemVariants}
            href="mailto:hrishikesh@hrishikeshnetke.in"
            className="inline-block text-xl md:text-2xl font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors duration-200 mb-10 underline underline-offset-4 decoration-zinc-400/50 dark:decoration-zinc-600/50 hover:decoration-zinc-500 dark:hover:decoration-zinc-400"
          >
            hrishikesh@hrishikeshnetke.in
          </motion.a>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 flex-wrap mb-12"
          >
            {socialLinks
              .filter((l) => l.platform !== "email" && l.platform !== "website")
              .map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-500 dark:text-gray-400 border border-black/10 dark:border-white/8 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </a>
                );
              })}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ y: -2, boxShadow: "0 12px 40px rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-black bg-white transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>

            <motion.a
              href="mailto:hrishikesh@hrishikeshnetke.in"
              whileHover={{ y: -2, borderColor: "rgba(161,161,170,0.5)", color: "#a1a1aa" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-gray-600 dark:text-gray-300 border border-black/20 dark:border-white/20 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-200"
            >
              Send a Message
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
