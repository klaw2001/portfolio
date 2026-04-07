"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { experience } from "@/lib/data";

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
          className="mb-14"
        >
          <p className="section-label mb-4">Experience</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-snug max-w-xl">
            Building products at{" "}
            <span className="text-gray-400">fast-moving companies</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-800 hidden md:block" />

          <div className="space-y-6">
            {experience.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div
                  className={`hidden md:flex absolute left-[18px] top-7 w-3 h-3 rounded-full border-2 -translate-x-1/2 ${
                    item.current
                      ? "bg-zinc-400 border-zinc-400"
                      : "bg-gray-800 border-gray-600"
                  }`}
                >
                  {item.current && (
                    <span className="absolute inset-0 rounded-full bg-zinc-400 animate-ping opacity-40" />
                  )}
                </div>

                <div className="glass-card rounded-2xl p-7 md:p-8 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {item.company}
                        </h3>
                        {item.current && (
                          <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-zinc-500/10 text-zinc-400 border border-zinc-500/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {item.role}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 whitespace-nowrap shrink-0">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-2">
                    {item.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-500"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
