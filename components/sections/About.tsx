"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-background/60 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-16 md:gap-24 items-start"
        >
          {/* Left — label + headline */}
          <div>
            <motion.p variants={itemVariants} className="section-label mb-5">
              About
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-snug"
            >
              Building the future of work,{" "}
              <span className="text-gray-400">one product at a time.</span>
            </motion.h2>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              {[
                { value: "2.7", label: "Years exp." },
                { value: "10+", label: "Products shipped" },
                { value: "∞", label: "Side projects" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p
                    className="text-3xl font-bold text-gray-900 dark:text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #52525b 0%, #a1a1aa 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — paragraphs */}
          <div className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              I&apos;m Hrishikesh, a Software Developer with 2.7+ years of
              experience building production-grade SaaS platforms. Currently at{" "}
              <span className="text-gray-900 dark:text-white font-medium">
                AI Tiger
              </span>
              , I specialize in shipping complete products fast — from database
              design to deployment.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              My edge is owning the full stack — frontend, backend, DevOps, and
              everything in between. I build complex dashboards, real-time systems,
              and multi-service integrations in days, not weeks.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              I&apos;m passionate about building tools that solve real problems —
              automation platforms, data products, and SaaS applications that
              actually get used in production.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 pt-2"
            >
              {[
                "Fast shipper",
                "Mumbai-based",
                "Full-Stack",
                "Available",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full border border-white/20 text-white hover:border-white/50 hover:bg-white/[0.06] transition-all duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
