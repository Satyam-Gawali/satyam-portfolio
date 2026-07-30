import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { TechBadge } from "../ui/TechBadge";
import { ProjectVisual } from "../ui/ProjectVisual";

export const FeaturedWork: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          subtitle="A selection of applications built around real problems, real users, and practical engineering."
        />

        <div className="space-y-32">
          {projects.map((project) => {
            const isFlagship = project.slug === "clvca";

            // Flagship Layout Structure (CLVCA)
            if (isFlagship) {
              return (
                <div
                  key={project.slug}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 min-h-[420px]">
                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-2">
                        {project.badges?.map((badge) => (
                          <span
                            key={badge}
                            className="px-2.5 py-1 rounded bg-brand-cyan/10 border border-brand-cyan/30 text-[10px] font-semibold uppercase tracking-wider text-brand-cyan"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-brand-text-primary">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-brand-cyan uppercase tracking-widest">
                        {project.subtitle}
                      </p>
                      <p className="text-base text-brand-text-secondary leading-relaxed max-w-xl">
                        {project.description}
                      </p>

                      <div className="space-y-3">
                        <div className="text-xs font-mono text-brand-text-muted uppercase tracking-wider">
                          Key Capabilities:
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-brand-text-secondary">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-center space-x-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0"></span>
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

                      <div className="flex flex-wrap items-center gap-4 pt-4">
                        {project.hasCaseStudy && (
                          <Link
                            href={`/projects/${project.slug}`}
                            className="inline-flex items-center space-x-2 text-sm font-bold text-brand-cyan hover:text-brand-cyan/80 transition-colors group"
                          >
                            <span>View Case Study</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-text-secondary hover:text-brand-text-primary transition-colors"
                          >
                            <GithubIcon className="w-4 h-4" />
                            <span>Source Code</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-text-secondary hover:text-brand-text-primary transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Project</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Flagship image side - mobile frame */}
                  <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 min-h-[420px]">
                    <ProjectVisual project={project} />
                  </div>
                </div>
              );
            }

            // Who Knows Sagar? layout
            if (project.slug === "who-knows-sagar") {
              return (
                <div
                  key={project.slug}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Image side - browser frame */}
                  <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-1 min-h-[420px]">
                    <ProjectVisual project={project} />
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-2 min-h-[420px]">
                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-mono tracking-wider font-semibold text-emerald-400 uppercase">
                          LIVE EVENT
                        </span>
                        <span className="px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20 text-[9px] font-mono tracking-wider font-semibold text-brand-cyan uppercase">
                          REAL-TIME DATA
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-brand-text-primary">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
                        {project.subtitle}
                      </p>
                      <p className="text-base text-brand-text-secondary leading-relaxed">
                        {project.description}
                      </p>

                      <div className="p-4 rounded-xl bg-brand-surface/60 border border-brand-border max-w-sm">
                        <div className="text-2xl font-bold text-brand-cyan font-mono">75+</div>
                        <div className="text-xs text-brand-text-secondary mt-1">Participants during the live event</div>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech) => (
                          <TechBadge key={tech} name={tech} />
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-6 pt-4">
                        {project.hasCaseStudy && (
                          <Link
                            href={`/projects/${project.slug}`}
                            className="inline-flex items-center space-x-2 text-sm font-bold text-brand-cyan hover:text-brand-cyan/80 transition-colors group"
                          >
                            <span>View Details</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-text-secondary hover:text-brand-text-primary transition-colors"
                          >
                            <GithubIcon className="w-4 h-4" />
                            <span>Source Code</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-text-secondary hover:text-brand-text-primary transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Expense Tracker layout (text left, mockup right)
            return (
              <div
                key={project.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 min-h-[420px]">
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-text-primary">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-brand-cyan uppercase tracking-widest">
                      {project.subtitle}
                    </p>
                    <p className="text-base text-brand-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-6 pt-4">
                      {project.hasCaseStudy && (
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center space-x-2 text-sm font-bold text-brand-cyan hover:text-brand-cyan/80 transition-colors group"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-text-secondary hover:text-brand-text-primary transition-colors"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>Source Code</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-text-secondary hover:text-brand-text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live App</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Mobile Mockup side */}
                <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2 min-h-[420px]">
                  <ProjectVisual project={project} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};