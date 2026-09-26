import React from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { links } from "@/config/links";

export const GithubCTA: React.FC = () => {
  if (!links.github) return null;

  return (
    <section className="py-20 px-6 bg-brand-bg relative border-t border-brand-border">
      <div className="max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-[28px] bg-gradient-to-br from-brand-card-bg-gradient-from to-brand-card-bg-gradient-to border border-brand-card-border hover:border-brand-border-focus flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl shadow-black/5 dark:shadow-black/50 transition-all duration-300">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-violet/8 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-brand-violet-light uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-violet animate-pulse" />
              <span>Open Source Development</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text-primary tracking-tight">
              Building & sharing in public.
            </h2>
            <p className="text-sm sm:text-base text-brand-text-secondary leading-relaxed">
              Explore application repositories, architecture experiments, and reusable Flutter packages on GitHub.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full bg-brand-primary-btn-bg text-brand-primary-btn-text font-bold text-sm hover:opacity-90 transition-all duration-200 shadow-xl shadow-black/5 dark:shadow-white/5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
