"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-brand-bg relative border-t border-brand-border overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-brand-violet/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative space-y-16">
        <SectionHeading
          eyebrow="Experience"
          title="Work History"
          subtitle="Engineering production Flutter applications, collaborating with teams, and building scalable mobile architectures."
        />

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-violet/40 via-brand-border to-transparent" />

          <div className="space-y-10">
            {experience.map((entry, index) => (
              <motion.div
                key={entry.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative pl-14 md:pl-20"
              >
                {/* Timeline node */}
                <div className="absolute left-3.5 md:left-5.5 top-7 w-5 h-5 rounded-full border-2 border-brand-violet bg-brand-bg shadow-[0_0_12px_rgba(139,92,246,0.35)] z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-violet-light" />
                </div>

                {/* Experience Bento Card */}
                <div className="p-6 sm:p-8 rounded-[24px] bg-brand-surface/80 border border-brand-card-border hover:border-brand-border-focus backdrop-blur-xl shadow-2xl shadow-black/5 dark:shadow-black/50 transition-all duration-300 group">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                    <div className="flex items-start space-x-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-brand-violet/10 border border-brand-violet/25 flex items-center justify-center shrink-0 group-hover:bg-brand-violet/15 transition-colors duration-300">
                        <Briefcase className="w-5 h-5 text-brand-violet-light" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-brand-text-primary group-hover:text-brand-violet-light transition-colors duration-300">
                          {entry.company}
                        </h3>
                        <p className="text-xs font-mono text-brand-violet-light tracking-wide pt-0.5">
                          {entry.position}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-brand-text-muted bg-brand-pill-bg border border-brand-pill-border px-3 py-1 rounded-full whitespace-nowrap self-start">
                      {entry.duration}
                    </span>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2.5 mb-6">
                    {entry.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-3 text-sm text-brand-text-secondary leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-violet mt-2 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 pt-1 border-t border-brand-border">
                    {entry.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
