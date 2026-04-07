"use client";

import { motion } from "framer-motion";
import { skillCards } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-transparent relative overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        aria-hidden
        className="absolute inset-0 dot-grid opacity-40 pointer-events-none"
      />
      {/* Subtle glow top-right */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(113,113,122,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-14"
        >
          <p className="section-label mb-4">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground dark:text-white leading-snug max-w-xl">
            What I&apos;m{" "}
            <span className="text-muted-foreground dark:text-gray-500">really good at</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {skillCards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group glass-card rounded-2xl p-8 transition-all duration-300"
            >
              <card.icon className="w-7 h-7 mb-5 text-zinc-400" />
              <h3 className="text-lg font-semibold text-foreground dark:text-white mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground dark:text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
