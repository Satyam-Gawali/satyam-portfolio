import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Cpu } from "lucide-react";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TechBadge } from "@/components/ui/TechBadge";
import { ScreenshotCarousel } from "@/components/ui/ScreenshotCarousel";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths at build time
export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Cover images array (jar 'coverImages' nsel tar 'imageUrl' vaprel)
  const coverImages = project.coverImages ?? [project.imageUrl];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 bg-brand-bg relative">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Back button */}
          <Link
            href="/#work"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-brand-text-secondary hover:text-brand-cyan transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Work</span>
          </Link>

          {/* ROW 1: Two Columns — Left Content (~65%), Right Stacked Cover Images (~35%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT COLUMN (~65%) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Header Info Block */}
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.badges?.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 rounded bg-brand-cyan/10 border border-brand-cyan/20 text-[10px] font-semibold uppercase tracking-wider text-brand-cyan"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text-primary tracking-tight">
                    {project.title}
                  </h1>
                  <p className="text-lg font-mono text-brand-cyan uppercase tracking-widest">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-brand-text-muted uppercase tracking-wider">
                    Technologies Used:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-surface border border-brand-border text-sm font-semibold text-brand-text-primary hover:border-brand-cyan/40 hover:text-brand-cyan transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View Source Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-cyan text-brand-bg text-sm font-bold hover:bg-brand-cyan/95 transition-all shadow-lg shadow-brand-cyan/10"
                    >
                      <Cpu className="w-4 h-4" />
                      <span>
                        {project.slug === "clvca" ? "Get on Google Play" : "Live Demo"}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Overview & Case Study Content */}
              <div className="space-y-8 pt-6 border-t border-brand-border/40">
                {project.problem && (
                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold text-brand-text-primary">
                      The Problem
                    </h2>
                    <p className="text-base text-brand-text-secondary leading-relaxed">
                      {project.problem}
                    </p>
                  </section>
                )}

                {project.solution && (
                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold text-brand-text-primary">
                      The Solution
                    </h2>
                    <p className="text-base text-brand-text-secondary leading-relaxed">
                      {project.solution}
                    </p>
                  </section>
                )}

                <section className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold text-brand-text-primary">
                    Engineering Highlights
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="p-3.5 rounded-xl bg-brand-surface/60 border border-brand-border flex items-start space-x-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-brand-cyan mt-1.5 shrink-0"></span>
                        <span className="text-sm text-brand-text-secondary leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>

                {project.challenges && (
                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold text-brand-text-primary">
                      Technical Challenges
                    </h2>
                    <p className="text-base text-brand-text-secondary leading-relaxed">
                      {project.challenges}
                    </p>
                  </section>
                )}

                {project.outcome && (
                  <section className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-bold text-brand-text-primary">
                      Project Outcome
                    </h2>
                    <p className="text-base text-brand-text-secondary leading-relaxed">
                      {project.outcome}
                    </p>
                  </section>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN (~35%): Stacked Images with Precise Cascading Hover Fade */}
            <div className="lg:col-span-5 flex justify-center lg:justify-center w-full pt-10">
              <div className="sticky top-28 w-full flex items-center justify-center h-[380px] sm:h-[420px] relative group/stack">
                {coverImages.map((imgSrc, index) => {
                  const isFront = index === 0;
                  
                  // Exact original diagonal stack composition rules (diagonal offset + rotation + scale)
                  let stackStyles = "scale-100 translate-x-0 translate-y-0 rotate-0";
                  if (index === 1) {
                    stackStyles = "scale-[0.89] translate-x-12 -translate-y-6 rotate-[7deg]";
                  } else if (index >= 2) {
                    stackStyles = "scale-[0.80] translate-x-24 -translate-y-12 rotate-[14deg]";
                  }

                  // Default base z-index and opacity based on initial stack order
                  const defaultState = index === 0 ? "z-30 opacity-100" : index === 1 ? "z-20 opacity-100" : "z-10 opacity-100";
                  // index === 0 ? "z-30 opacity-100" : (index === 1 ? "z-20 opacity-45" : "z-10 opacity-25");

                  // Cascading hover fading logic matching the requested specification:
                  // Hovering Image 2 (index 1) fades Image 1 (index 0) to 20%
                  // Hovering Image 3 (index 2) fades Image 1 (index 0) and Image 2 (index 1) to 20%
                  let hoverState = "";
                  if (index === 0) {
                    hoverState = "group-has-[.img-idx-1:hover]/stack:opacity-20 group-has-[.img-idx-2:hover]/stack:opacity-20";
                  } else if (index === 1) {
                    hoverState = "group-has-[.img-idx-2:hover]/stack:opacity-20";
                  }

                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 flex items-center justify-center pointer-events-none ${stackStyles} ${defaultState} transition-all duration-300 ease-out`}
                    >
                      <div className={`relative h-full w-auto flex items-center justify-center transition-all duration-300 ease-out origin-center ${hoverState} hover:!opacity-100 hover:!scale-[1.04] hover:!-translate-y-2 hover:!z-50 pointer-events-auto cursor-pointer img-idx-${index}`}>
                        <Image
                          src={imgSrc}
                          alt={`${project.title} cover image ${index + 1}`}
                          width={800}
                          height={500}
                          className="w-auto h-full object-contain rounded-2xl drop-shadow-2xl transition-all duration-300"
                          priority={isFront}
                          unoptimized
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <hr className="border-brand-border/40 my-12" />

          {/* ROW 2: Full Width Project Screenshot Gallery */}
          <div className="w-full">
            <ScreenshotCarousel project={project} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}