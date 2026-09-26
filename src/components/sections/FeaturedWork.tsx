"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Globe, CheckCircle2 } from "lucide-react";
import { GithubIcon, GooglePlayIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { TechBadge } from "../ui/TechBadge";
import { ProjectVisual } from "../ui/ProjectVisual";

export const FeaturedWork: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 bg-brand-bg relative">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-brand-violet/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[250px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          subtitle="Production-grade mobile applications built with clean architecture, offline-first capabilities, and modern UI engineering."
        />

        <div className="space-y-16">
          {projects.map((project) => {
            const isPromptixa = project.slug === "promptixa";
            const isClvca = project.slug === "clvca";
            const isWhoKnowsSagar = project.slug === "who-knows-sagar";

            // ─── 1. PROMPTIXA (FLAGSHIP #1) ─────────────────────────────────
            if (isPromptixa) {
              const promptixaCapabilities = [
                "Dynamic prompt customization with reusable placeholders",
                "Community-driven prompt discovery and sharing",
                "Firebase-powered authentication, data, and scalable discovery"
              ];
              const promptixaTechStack = [
                "Flutter",
                "Dart",
                "Riverpod",
                "Firebase",
                "Firestore",
                "Cloudinary",
                "AdMob",
                "Hive"
              ];

              return (
                <div
                  key={project.slug}
                  className="rounded-[28px] bg-gradient-to-b from-brand-card-bg-gradient-from to-brand-card-bg-gradient-to border border-brand-card-border hover:border-brand-border-focus backdrop-blur-xl p-6 sm:p-10 shadow-2xl shadow-black/5 dark:shadow-black/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Visual Left */}
                    <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-1 min-h-[380px]">
                      <ProjectVisual project={project} />
                    </div>

                    {/* Content Right */}
                    <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-2 space-y-6">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/30 text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-violet-light">
                            Featured Project
                          </span>
                          <span className="px-3 py-1 rounded-full bg-brand-pill-bg border border-brand-pill-border text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-text-secondary">
                            Google Play
                          </span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-text-primary tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-brand-violet-light uppercase tracking-widest">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-base text-brand-text-secondary leading-relaxed max-w-xl">
                        {project.description}
                      </p>

                      {/* 3 Key Capabilities */}
                      <div className="space-y-2.5 pt-1">
                        <div className="text-xs font-mono text-brand-text-muted uppercase tracking-wider">
                          Key Capabilities:
                        </div>
                        <ul className="space-y-2 text-sm text-brand-text-secondary">
                          {promptixaCapabilities.map((feature) => (
                            <li key={feature} className="flex items-start space-x-2.5">
                              <CheckCircle2 className="w-4 h-4 text-brand-violet-light mt-0.5 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Compact Tech Stack */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {promptixaTechStack.map((tech) => (
                          <TechBadge key={tech} name={tech} />
                        ))}
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-wrap items-center gap-3.5 pt-4">
                        {project.hasCaseStudy && (
                          <Link
                            href={`/projects/${project.slug}`}
                            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-brand-primary-btn-bg text-brand-primary-btn-text font-bold text-xs hover:opacity-90 transition-all shadow-lg shadow-black/5 dark:shadow-white/5"
                          >
                            <span>View Case Study</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                        {project.playStoreUrl && (
                          <a
                            href={project.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-brand-pill-bg border border-brand-pill-border text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-surface-hover transition-all"
                          >
                            <GooglePlayIcon className="w-3.5 h-3.5 text-brand-violet-light" />
                            <span>View on Google Play</span>
                          </a>
                        )}
                        {project.webUrl && (
                          <a
                            href={project.webUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-brand-pill-bg border border-brand-pill-border text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-surface-hover transition-all"
                          >
                            <Globe className="w-3.5 h-3.5 text-brand-cyan" />
                            <span>Visit Website</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // ─── 2. CLVCA (#2) ─────────────────────────────────────────────
            if (isClvca) {
              return (
                <div
                  key={project.slug}
                  className="rounded-[28px] bg-gradient-to-b from-brand-card-bg-gradient-from to-brand-card-bg-gradient-to border border-brand-card-border hover:border-brand-border-focus backdrop-blur-xl p-6 sm:p-10 shadow-2xl shadow-black/5 dark:shadow-black/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Content Left */}
                    <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 space-y-6">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-cyan">
                            On-Device AI
                          </span>
                          <span className="px-3 py-1 rounded-full bg-brand-pill-bg border border-brand-pill-border text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-text-secondary">
                            Google Play
                          </span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-text-primary tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-base text-brand-text-secondary leading-relaxed max-w-xl">
                        {project.description}
                      </p>

                      <div className="space-y-2.5 pt-1">
                        <div className="text-xs font-mono text-brand-text-muted uppercase tracking-wider">
                          Key Capabilities:
                        </div>
                        <ul className="space-y-2 text-sm text-brand-text-secondary">
                          {project.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-start space-x-2.5">
                              <CheckCircle2 className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech) => (
                          <TechBadge key={tech} name={tech} />
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-3.5 pt-4">
                        {project.hasCaseStudy && (
                          <Link
                            href={`/projects/${project.slug}`}
                            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-brand-primary-btn-bg text-brand-primary-btn-text font-bold text-xs hover:opacity-90 transition-all shadow-lg shadow-black/5 dark:shadow-white/5"
                          >
                            <span>View Case Study</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                        {project.playStoreUrl && (
                          <a
                            href={project.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-brand-pill-bg border border-brand-pill-border text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-surface-hover transition-all"
                          >
                            <GooglePlayIcon className="w-3.5 h-3.5 text-brand-cyan" />
                            <span>Google Play</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Visual Right */}
                    <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 min-h-[380px]">
                      <ProjectVisual project={project} />
                    </div>
                  </div>
                </div>
              );
            }

            // ─── 3. WHO KNOWS SAGAR (#3) ───────────────────────────────────
            if (isWhoKnowsSagar) {
              return (
                <div
                  key={project.slug}
                  className="rounded-[28px] bg-gradient-to-b from-brand-card-bg-gradient-from to-brand-card-bg-gradient-to border border-brand-card-border hover:border-brand-border-focus backdrop-blur-xl p-6 sm:p-10 shadow-2xl shadow-black/5 dark:shadow-black/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Visual Left */}
                    <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-1 min-h-[380px]">
                      <ProjectVisual project={project} />
                    </div>

                    {/* Content Right */}
                    <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-2 space-y-6">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
                            Live Event App
                          </span>
                          <span className="px-3 py-1 rounded-full bg-brand-pill-bg border border-brand-pill-border text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-text-secondary">
                            Flutter Web
                          </span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-text-primary tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-emerald-500 dark:text-emerald-400 uppercase tracking-widest">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-base text-brand-text-secondary leading-relaxed max-w-xl">
                        {project.description}
                      </p>

                      <div className="p-3.5 rounded-xl bg-brand-pill-bg border border-brand-pill-border max-w-xs">
                        <div className="text-xl font-bold text-emerald-500 dark:text-emerald-400 font-mono">75+ Attendees</div>
                        <div className="text-xs text-brand-text-secondary mt-0.5">Real-time synchronized leaderboard</div>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech) => (
                          <TechBadge key={tech} name={tech} />
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-3.5 pt-4">
                        {project.hasCaseStudy && (
                          <Link
                            href={`/projects/${project.slug}`}
                            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-brand-primary-btn-bg text-brand-primary-btn-text font-bold text-xs hover:opacity-90 transition-all shadow-lg shadow-black/5 dark:shadow-white/5"
                          >
                            <span>View Case Study</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-brand-pill-bg border border-brand-pill-border text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-surface-hover transition-all"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Source Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // ─── 4. EXPENSE TRACKER (#4) ───────────────────────────────────
            return (
              <div
                key={project.slug}
                className="rounded-[28px] bg-gradient-to-b from-brand-card-bg-gradient-from to-brand-card-bg-gradient-to border border-brand-card-border hover:border-brand-border-focus backdrop-blur-xl p-6 sm:p-10 shadow-2xl shadow-black/5 dark:shadow-black/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/30 text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-indigo">
                          Personal Finance
                        </span>
                        <span className="px-3 py-1 rounded-full bg-brand-pill-bg border border-brand-pill-border text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-text-secondary">
                          Hive Persistence
                        </span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-text-primary tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-brand-indigo uppercase tracking-widest">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-base text-brand-text-secondary leading-relaxed max-w-xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3.5 pt-4">
                      {project.hasCaseStudy && (
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-brand-primary-btn-bg text-brand-primary-btn-text font-bold text-xs hover:opacity-90 transition-all shadow-lg shadow-black/5 dark:shadow-white/5"
                        >
                          <span>View Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-brand-pill-bg border border-brand-pill-border text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-surface-hover transition-all"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Visual Right */}
                  <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 min-h-[380px]">
                    <ProjectVisual project={project} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};