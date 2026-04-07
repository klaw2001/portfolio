"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Rocket, Smartphone, Film, HardDrive } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data";
import { techIconMap } from "@/lib/data";

function TechIconTile({ tech, icon: Icon, color }: { tech: string; icon: React.ElementType; color: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      title={tech}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-center"
    >
      <Icon
        className="w-5 h-5 transition-colors duration-200"
        style={{ color: hovered ? color : "#71717a" }}
      />
    </div>
  );
}

const badgeConfig: Record<string, string> = {
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  zinc: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
};

const badgeIcon: Record<string, LucideIcon> = {
  emerald: Rocket,
  blue: Smartphone,
  amber: Film,
  zinc: HardDrive,
};

interface FeaturedProjectCardProps {
  project: Project;
  index: number;
}

export default function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  const BadgeIcon = badgeIcon[project.badgeColor];
  const isOdd = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, x: isOdd ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      className="group relative glass-card rounded-3xl overflow-hidden transition-all duration-500"
    >
      <div
        className={cn(
          "grid md:grid-cols-2 gap-0",
          isOdd ? "md:grid-flow-col" : ""
        )}
      >
        {/* Visual */}
        <div
          className={cn(
            "relative overflow-hidden",
            isOdd ? "md:order-2" : "md:order-1"
          )}
        >
          <div
            className={`relative w-full aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10 w-4/5 bg-black/50 rounded-lg border border-white/10 overflow-hidden backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <div className="ml-2 flex-1 h-4 bg-white/5 rounded text-[8px] text-white/30 flex items-center px-2 font-mono">
                  {project.liveUrl ?? `${project.slug}.app`}
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-2">
                  <div className="h-3 bg-white/10 rounded w-3/4" />
                  <div className="h-3 bg-white/6 rounded w-1/2" />
                  <div className="h-8 bg-white/5 rounded mt-3" />
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="h-12 bg-white/5 rounded" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className={cn(
            "p-8 md:p-10 flex flex-col justify-center",
            isOdd ? "md:order-1" : "md:order-2"
          )}
        >
          {/* Number + Category */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-zinc-600">{project.number}</span>
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{project.category}</span>
          </div>

          {/* Badge */}
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border w-fit mb-5",
              badgeConfig[project.badgeColor]
            )}
          >
            <BadgeIcon className="w-3 h-3" />
            {project.badge}
          </span>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-3">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-sm font-medium text-zinc-400 mb-6 leading-relaxed line-clamp-2">
            {project.tagline}
          </p>

          {/* Tech icons */}
          <div className="flex flex-wrap gap-4 mb-7 items-center">
            {project.techStack.map((tech) => {
              const entry = techIconMap[tech];
              if (!entry) return (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[11px] font-medium rounded bg-white/[0.04] text-white/60 border border-white/20"
                >
                  {tech}
                </span>
              );
              return (
                <TechIconTile key={tech} tech={tech} icon={entry.icon as React.ElementType} color={entry.color} />
              );
            })}
          </div>

          {/* Links */}
          <div className="flex items-center gap-5">
            <Link
              href={`/projects/${project.slug}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-zinc-300 hover:text-white transition-colors duration-200 group/link"
            >
              View case study
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
            </Link>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-400 transition-colors duration-200 group/live"
              >
                Live site
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
