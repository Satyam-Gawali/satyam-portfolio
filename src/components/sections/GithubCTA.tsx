import React from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { links } from "@/config/links";

export const GithubCTA: React.FC = () => {
  if (!links.github) return null;

  return (
    <section className="py-20 px-6 bg-brand-bg relative border-t border-brand-border/40">
      <div className="max-w-5xl mx-auto">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-brand-surface to-brand-bg border border-brand-border flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle background highlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          <div className="space-y-4 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-brand-cyan uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
              <span>Open Source Development</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text-primary tracking-tight">
              I build in public.
            </h2>
            <p className="text-sm md:text-base text-brand-text-secondary leading-relaxed">
              I publish application code repositories, experiments, and reusable Flutter color/theme libraries on GitHub, helping contribute back to the mobile developer community.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-brand-text-primary text-brand-bg font-bold hover:bg-brand-text-primary/90 transition-all duration-200"
            >
              <GithubIcon className="w-5 h-5" />
              <span>Explore My GitHub</span>
              <ExternalLink className="w-4 h-4 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
