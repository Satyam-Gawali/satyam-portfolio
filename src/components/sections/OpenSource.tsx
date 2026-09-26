"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Package, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { packages } from "@/data/packages";
import { SectionHeading } from "../ui/SectionHeading";

export const OpenSource: React.FC = () => {
  return (
    <section id="open-source" className="py-24 px-6 bg-brand-bg relative border-t border-brand-border overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-brand-violet/5 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        <SectionHeading
          eyebrow="Open Source"
          title="Flutter Packages & Tooling"
          subtitle="Reusable tools and UI libraries designed for the Flutter community with emphasis on type safety and flexibility."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {packages.map((pkg) => {
            const topFeatures = pkg.features.slice(0, 4);

            return (
              <div
                key={pkg.title}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-[24px] bg-brand-surface/80 backdrop-blur-xl border border-brand-card-border hover:border-brand-border-focus transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-black/5 dark:shadow-black/50 group"
              >
                <div className="space-y-5">
                  {/* Package Header */}
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                      {pkg.imageUrl ? (
                        <Image
                          src={pkg.imageUrl}
                          alt={`${pkg.title} logo`}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-2xl border border-brand-card-border object-cover shadow-md"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-2xl bg-brand-violet/10 border border-brand-violet/25 flex items-center justify-center">
                          <Package className="w-6 h-6 text-brand-violet-light" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-text-primary group-hover:text-brand-violet-light transition-colors">
                        {pkg.title}
                      </h3>
                      <div className="flex items-center gap-1.5 pt-1">
                        {pkg.technologies.map((tech) => (
                          <span key={tech} className="text-[10px] font-mono text-brand-text-muted bg-brand-pill-bg px-2 py-0.5 rounded-full border border-brand-pill-border">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-brand-text-secondary leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2 pt-1">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2 text-xs text-brand-text-secondary">
                      {topFeatures.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-violet-light shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-brand-border">
                  {pkg.pubUrl && (
                    <a
                      href={pkg.pubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-brand-primary-btn-bg text-brand-primary-btn-text text-xs font-bold hover:opacity-90 transition-all shadow-md shadow-black/5 dark:shadow-white/5"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Pub.dev</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                  {pkg.githubUrl && (
                    <a
                      href={pkg.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-brand-pill-bg border border-brand-card-border text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-surface-hover transition-all"
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