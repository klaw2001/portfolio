"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data";

const badgeConfig: Record<string, string> = {
  emerald: "text-emerald-400",
  blue: "text-blue-400",
  amber: "text-amber-400",
  zinc: "text-zinc-400",
};

interface CompactProjectCardProps {
  project: Project;
  index: number;
}

export default function CompactProjectCard({ project, index }: CompactProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      className="group glass-card rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-zinc-700/60"
    >
      {/* Number + Category */}
      <div className="flex items-center gap-2">
        <span className="font-mono text-xs text-zinc-700">{project.number}</span>
        <span className="text-zinc-700 text-xs">·</span>
        <span className={cn("text-xs font-medium uppercase tracking-wider", badgeConfig[project.badgeColor])}>
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-white leading-snug">
        {project.title}
      </h3>

      {/* Tagline */}
      <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2 flex-1">
        {project.tagline}
      </p>

      {/* Tech pills — max 3 */}
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[11px] font-medium rounded bg-white/[0.04] text-white border border-white/20 hover:border-white/50 hover:bg-white/[0.10] transition-all duration-200 cursor-default"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 3 && (
          <span className="px-2 py-0.5 text-[11px] font-medium rounded bg-white/[0.04] text-white/60 border border-white/20 hover:border-white/50 hover:bg-white/[0.10] transition-all duration-200 cursor-default">
            +{project.techStack.length - 3}
          </span>
        )}
      </div>

      {/* CTA */}
      <Link
        href={`/projects/${project.slug}`}
        className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-200 transition-colors duration-200 group/link mt-auto"
      >
        View case study
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}
