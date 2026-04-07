"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import CompactProjectCard from "@/components/CompactProjectCard";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-16"
        >
          <p className="section-label mb-4">All Projects</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-snug max-w-xl">
            Every product,{" "}
            <span className="text-gray-400">built end-to-end</span>
          </h2>
        </motion.div>

        {/* Featured — large alternating cards */}
        <div className="space-y-8 mb-16">
          {featured.map((project, i) => (
            <FeaturedProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-xs font-medium text-zinc-600 uppercase tracking-widest">More projects</span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </motion.div>

        {/* Rest — compact grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <CompactProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
