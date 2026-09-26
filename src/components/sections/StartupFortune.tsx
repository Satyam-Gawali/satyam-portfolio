"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, Sparkles, ArrowRight } from "lucide-react";
import { links } from "@/config/links";

export const StartupFortune: React.FC = () => {
  if (!links.startupFortune) return null;

  return (
    <section className="py-12 px-6 bg-brand-bg relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-violet/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.a
          href={links.startupFortune}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="group relative block rounded-[26px] p-[1px] bg-gradient-to-r from-brand-violet/40 via-brand-indigo/30 to-brand-cyan/40 hover:from-brand-violet/70 hover:via-brand-indigo/50 hover:to-brand-cyan/70 shadow-2xl transition-all duration-300 cursor-pointer"
        >
          {/* Card inner */}
          <div className="relative rounded-[25px] bg-brand-surface/90 backdrop-blur-xl p-6 sm:p-8 overflow-hidden">
            {/* Subtle top light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-16 bg-gradient-to-b from-brand-violet/15 to-transparent blur-xl pointer-events-none" />

            {/* External link icon in top corner */}
            <div className="absolute top-6 right-6 p-2 rounded-full bg-brand-pill-bg border border-brand-pill-border text-brand-text-muted group-hover:text-brand-text-primary group-hover:bg-brand-surface-hover transition-all">
              <ExternalLink className="w-4 h-4" />
            </div>

            <div className="relative flex flex-col sm:flex-row items-start gap-5">
              {/* Award Icon */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-13 h-13 rounded-2xl bg-gradient-to-br from-brand-violet/20 to-brand-cyan/20 border border-brand-card-border flex items-center justify-center shrink-0 shadow-lg shadow-brand-violet/10"
              >
                <Award className="w-6 h-6 text-brand-violet-light" />
              </motion.div>

              {/* Content */}
              <div className="flex-1 space-y-3 pr-8">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-violet/10 border border-brand-violet/25 text-[10px] font-mono font-semibold text-brand-violet-light uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Featured Article
                  </span>
                  <span className="text-xs font-mono text-brand-text-muted">
                    Published on StartupFortune
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-brand-text-primary group-hover:text-brand-violet-light transition-colors">
                  🏆 Featured by StartupFortune
                </h3>

                <p className="text-sm text-brand-text-secondary leading-relaxed max-w-2xl">
                  CLVCA was featured by StartupFortune for its offline real-time voice translation architecture that processes speech directly on-device without relying on cloud services.
                </p>

                <div className="pt-2">
                  <span className="inline-flex items-center space-x-1.5 text-xs font-semibold text-brand-violet-light group-hover:text-brand-text-primary transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};