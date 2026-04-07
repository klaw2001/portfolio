"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Rocket, Smartphone, Film, HardDrive } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import DetailNavigation from "@/components/DetailNavigation";
import Footer from "@/components/Footer";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div variants={itemVariants}>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4 section-label">
        {title}
      </h2>
      <div className="text-base text-gray-400 leading-relaxed">{children}</div>
    </motion.div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="glass-card rounded-xl p-5">
      <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const BadgeIcon = badgeIcon[project.badgeColor];

  return (
    <>
      <DetailNavigation />

      <main className="pt-24 pb-32 min-h-screen noise-texture">
        {/* Background radial */}
        <div
          aria-hidden
          className="fixed inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(113,113,122,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-300 transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
              Back to projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-12"
          >
            {/* Number + Category */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-zinc-600">{project.number}</span>
              <span className="text-zinc-700 text-xs">·</span>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                {project.category}
              </span>
            </motion.div>

            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-5">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border",
                  badgeConfig[project.badgeColor]
                )}
              >
                <BadgeIcon className="w-3 h-3" />
                {project.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4"
            >
              {project.title}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-zinc-400 leading-relaxed mb-6 max-w-2xl"
            >
              {project.tagline}
            </motion.p>

            {/* Tech pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/[0.05] text-zinc-500 border border-white/[0.06]"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className={`relative w-full aspect-video bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden mb-16`}
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
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/5 max-w-lg bg-black/50 rounded-lg border border-white/10 overflow-hidden backdrop-blur-sm">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <div className="ml-2 flex-1 h-4 bg-white/5 rounded text-[8px] text-white/30 flex items-center px-2 font-mono">
                    {project.liveUrl ?? `${project.slug}.app`}
                  </div>
                </div>
                <div className="p-4 space-y-2">
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
          </motion.div>

          {/* Case study body */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-3 gap-12"
          >
            {/* Main content */}
            <div className="md:col-span-2 space-y-12">
              <Section title="Overview">{project.overview}</Section>
              <Section title="The Problem">{project.problem}</Section>
              <Section title="The Solution">{project.solution}</Section>

              <motion.div variants={itemVariants}>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5 section-label">
                  Key Features
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.keyFeatures.map((feature) => (
                    <FeatureCard
                      key={feature.title}
                      title={feature.title}
                      description={feature.description}
                    />
                  ))}
                </div>
              </motion.div>

              {project.architecture && (
                <Section title="Architecture">
                  <div className="glass-card rounded-xl p-5 font-mono text-sm text-zinc-400 leading-relaxed">
                    {project.architecture}
                  </div>
                </Section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <motion.div variants={itemVariants}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/[0.05] text-zinc-500 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {project.liveUrl && (
                <motion.div variants={itemVariants}>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-4">
                    Live
                  </h3>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white border border-white/[0.12] hover:border-white/25 transition-all duration-200 group"
                  >
                    View live site
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </motion.div>
              )}

              <motion.div variants={itemVariants}>
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-300 transition-colors duration-200 group"
                >
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
                  All projects
                </Link>
              </motion.div>
            </aside>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
