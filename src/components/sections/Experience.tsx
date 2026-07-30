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
      className="py-24 px-6 bg-brand-bg relative border-t border-brand-border/40 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-brand-cyan/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-brand-secondary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeading
          eyebrow="Career"
          title="Professional Experience"
          subtitle="Building production Flutter applications and contributing to engineering teams."
        />

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-cyan/40 via-brand-border/60 to-transparent" />

          <div className="space-y-12">
            {experience.map((entry, index) => (
              <motion.div
                key={entry.company}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline node */}
                <div className="absolute left-3.5 md:left-5.5 top-8 w-5 h-5 rounded-full border-2 border-brand-cyan bg-brand-bg shadow-[0_0_12px_rgba(6,182,212,0.35)] z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                </div>

                {/* Experience Card */}
                <div className="group p-6 sm:p-8 rounded-2xl bg-brand-surface/70 border border-brand-border hover:border-brand-cyan/35 backdrop-blur-sm shadow-xl shadow-black/20 hover:shadow-brand-cyan/8 hover:-translate-y-1 transition-all duration-300">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                    <div className="flex items-start space-x-4">
                      {/* Company avatar */}
                      <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center shrink-0 group-hover:bg-brand-cyan/15 transition-colors duration-300">
                        <Briefcase className="w-5 h-5 text-brand-cyan" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-brand-text-primary group-hover:text-brand-cyan transition-colors duration-300">
                          {entry.company}
                        </h3>
                        <p className="text-sm font-mono text-brand-cyan tracking-wide">
                          {entry.position}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-brand-text-muted bg-brand-bg/60 border border-brand-border/50 px-3 py-1 rounded-full whitespace-nowrap self-start">
                      {entry.duration}
                    </span>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2.5 mb-5">
                    {entry.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-3 text-sm text-brand-text-secondary leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan/60 mt-2 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
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
