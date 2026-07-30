"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, Sparkles } from "lucide-react";
import { links } from "@/config/links";

export const StartupFortune: React.FC = () => {
  if (!links.startupFortune) return null;

  return (
    <section className="py-10 px-6 bg-brand-bg relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-cyan/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.a
          href={links.startupFortune}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="group relative block rounded-2xl p-[1px] bg-gradient-to-r from-brand-cyan/60 via-brand-primary/40 to-brand-secondary/65 shadow-xl shadow-brand-cyan/6 hover:shadow-brand-cyan/15 transition-all duration-300 cursor-pointer"
        >
          {/* Card inner container */}
          <div className="relative rounded-[calc(1rem-1px)] bg-brand-surface/90 backdrop-blur-xl p-6 sm:p-7 overflow-hidden">
            {/* Subtle top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-14 bg-gradient-to-b from-brand-cyan/10 to-transparent blur-lg pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
              
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan/15 to-brand-secondary/15 border border-brand-cyan/30 flex items-center justify-center shrink-0 shadow-md shadow-brand-cyan/10"
                >
                  <Award className="w-6 h-6 text-brand-cyan" />
                </motion.div>

                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-[9px] font-mono font-semibold text-brand-cyan uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Featured Article
                    </span>
                    <span className="text-xs font-mono text-brand-text-muted">StartupFortune</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-brand-text-primary group-hover:text-brand-cyan transition-colors">
                    🏆 CLVCA Featured for Offline Voice Translation
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed max-w-xl">
                    Read how CLVCA was highlighted for processing speech directly on-device without cloud dependence.
                  </p>
                </div>
              </div>

              <div className="shrink-0 self-end sm:self-center">
                <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-cyan text-brand-bg font-semibold text-xs group-hover:scale-105 transition-all shadow-md shadow-brand-cyan/20">
                  <span>Read Article</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};