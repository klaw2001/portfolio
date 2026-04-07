"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";

export default function Projects() {
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

        {/* All projects — large alternating cards */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <FeaturedProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
