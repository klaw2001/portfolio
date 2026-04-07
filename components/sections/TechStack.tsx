"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { techCategories, type TechItem } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

function TechTile({ item }: { item: TechItem }) {
  const [hovered, setHovered] = useState(false);
  const TechIcon = item.icon;
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl
                 bg-white/[0.03] border border-white/[0.07]
                 hover:border-white/20 hover:bg-white/[0.06]
                 transition-all duration-200 cursor-default min-h-[72px]"
    >
      <TechIcon
        className="w-6 h-6 transition-colors duration-200 shrink-0"
        style={{ color: hovered ? item.color : "#71717a" }}
      />
      <span
        className="text-[10px] text-center leading-tight transition-colors duration-200 font-medium"
        style={{ color: hovered ? "#d4d4d8" : "#71717a" }}
      >
        {item.name}
      </span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section
      id="stack"
      className="py-24 md:py-32 bg-background/40 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-14"
        >
          <p className="section-label mb-4">Tech Stack</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white max-w-lg leading-snug">
              Tools I use to build{" "}
              <span className="text-gray-400">premium products</span>
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-500 max-w-xs">
              Carefully selected for speed, scalability, and developer experience.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {techCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="group relative glass-card rounded-2xl p-7 overflow-visible transition-all duration-300"
              >
                {/* Corner squares on hover (Vercel-inspired) */}
                <div className="pointer-events-none absolute inset-0 hidden group-hover:block">
                  <div className="absolute -left-[3px] -top-[3px] h-[6px] w-[6px] bg-zinc-400 dark:bg-zinc-500" />
                  <div className="absolute -right-[3px] -top-[3px] h-[6px] w-[6px] bg-zinc-400 dark:bg-zinc-500" />
                  <div className="absolute -left-[3px] -bottom-[3px] h-[6px] w-[6px] bg-zinc-400 dark:bg-zinc-500" />
                  <div className="absolute -right-[3px] -bottom-[3px] h-[6px] w-[6px] bg-zinc-400 dark:bg-zinc-500" />
                </div>

                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.06] group-hover:border-white/[0.15] transition-colors duration-300">
                    <Icon className="w-4 h-4 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                    {cat.name}
                  </h3>
                </div>

                {/* Icon tile grid */}
                <div className="grid grid-cols-3 gap-2">
                  {cat.items.map((item) => (
                    <TechTile key={item.name} item={item} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
