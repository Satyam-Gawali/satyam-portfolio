import React from "react";
import Image from "next/image";
import { Cpu, Package } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { packages } from "@/data/packages";
import { SectionHeading } from "../ui/SectionHeading";
import { TechBadge } from "../ui/TechBadge";

export const OpenSource: React.FC = () => {
  return (
    <section id="open-source" className="py-24 px-6 bg-brand-bg relative border-t border-brand-border/40 overflow-hidden">
      {/* Subtle ambient lighting / radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-cyan/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="Open Source"
          title="Open Source & Flutter Packages"
          subtitle="Reusable tools built for the Flutter ecosystem, designed with a focus on code structure, flexibility, and developer experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {packages.map((pkg, index) => {
            // Select top 3-4 key features for a compact, clean look
            const topFeatures = pkg.features.slice(0, 4);

            return (
              <div
                key={pkg.title}
                className="flex flex-col justify-between p-6 rounded-2xl bg-brand-surface/80 backdrop-blur-md border border-brand-border hover:border-brand-cyan/40 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-cyan/10 relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Floating glow behind card on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-cyan/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  {/* Package Header */}
                  <div className="flex items-center space-x-3.5">
                    <div className="transition-transform duration-300 group-hover:scale-105 shrink-0">
                      {pkg.imageUrl ? (
                        <Image
                          src={pkg.imageUrl}
                          alt={`${pkg.title} logo`}
                          width={48}
                          height={48}
                          className="w-11 h-11 rounded-xl border border-brand-border object-cover shadow-md"
                        />
                      ) : (
                        <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center">
                          <Package className="w-5 h-5 text-brand-cyan" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-text-primary group-hover:text-brand-cyan transition-colors">
                        {pkg.title}
                      </h3>
                      <div className="flex items-center gap-1.5 pt-0.5">
                        {pkg.technologies.map((tech) => (
                          <span key={tech} className="text-[10px] font-mono text-brand-text-muted bg-brand-bg px-2 py-0.5 rounded border border-brand-border/60">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description - Compact (max 2 lines) */}
                  <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed line-clamp-2">
                    {pkg.description}
                  </p>

                  {/* Key Features List (3-4 items max) */}
                  <div className="space-y-1.5 pt-1">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-brand-text-secondary">
                      {topFeatures.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0"></span>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="flex items-center gap-3 pt-5 mt-5 border-t border-brand-border/40 relative z-10">
                  {pkg.pubUrl && (
                    <a
                      href={pkg.pubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-brand-cyan text-brand-bg text-xs font-bold hover:bg-brand-cyan/90 transition-all shadow-md shadow-brand-cyan/10 active:scale-95"
                    >
                      <Cpu className="w-3.5 h-3.5" />
                      <span>View on pub.dev</span>
                    </a>
                  )}
                  {pkg.githubUrl && (
                    <a
                      href={pkg.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-brand-bg border border-brand-border text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary hover:border-brand-cyan/30 transition-all active:scale-95"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};