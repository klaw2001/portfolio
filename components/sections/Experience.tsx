"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

function NowBadge() {
  return (
    <span className="flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-zinc-500/10 text-zinc-400 border border-zinc-500/20">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-zinc-400" />
      </span>
      Now
    </span>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-background/60 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-2"
        >
          <p className="section-label mb-4">Experience</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-snug max-w-xl">
            Building products at{" "}
            <span className="text-gray-400">fast-moving companies</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div>
          {experience.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="relative group pb-10"
            >
              {/* Ghost index number */}
              <span
                className="hidden md:block absolute left-0 top-2 text-7xl font-mono font-bold text-zinc-600/40 select-none leading-none pointer-events-none"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Animated horizontal rule */}
              <motion.div
                className="h-px bg-zinc-800/70 mb-8 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
              />

              {/* Content block */}
              <div
                className={`md:pl-24 transition-all duration-300 ${
                  item.current
                    ? "border-zinc-600/50 md:pl-[6.5rem] shadow-[inset_3px_0_20px_rgba(113,113,122,0.04)]"
                    : "pl-0"
                }`}
              >
                {/* Company + Period row */}
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {item.company}
                    </h3>
                    {item.current && <NowBadge />}
                  </div>
                  <span className="font-mono text-sm text-zinc-500 shrink-0 mt-1">
                    {item.period}
                  </span>
                </div>

                {/* Role */}
                <p className="text-sm font-medium text-zinc-400 mt-1">
                  {item.role}
                </p>

                {/* Description */}
                <p className="text-sm text-zinc-500 leading-relaxed mt-4 max-w-2xl">
                  {item.description}
                </p>

                {/* Highlight tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {item.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex px-2.5 py-1 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs font-mono text-zinc-400"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Closing rule */}
          <motion.div
            className="h-px bg-zinc-800/70 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: experience.length * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          />
        </div>
      </div>
    </section>
  );
}
