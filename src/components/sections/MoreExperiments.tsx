import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/ui/Icons";
import { FolderGit } from "lucide-react";
import { experiments } from "@/data/projects";
import { TechBadge } from "../ui/TechBadge";

export const MoreExperiments: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-brand-bg relative border-t border-brand-border/40">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-xs font-semibold tracking-widest text-brand-text-muted uppercase mb-2">
            Early Work
          </span>
          <h2 className="text-2xl font-bold text-brand-text-primary">
            More Experiments
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          {experiments.map((exp) => (
            <div
              key={exp.title}
              className="p-6 rounded-xl bg-brand-surface/50 border border-brand-border flex items-center justify-between gap-6 hover:border-brand-border-focus transition-all duration-200"
            >
              <div className="flex items-center space-x-4">
                {exp.imageUrl ? (
                  <Image src={exp.imageUrl} alt="BMI Calculator screen" width={1080} height={2340} sizes="56px" className="w-12 sm:w-14 h-auto rounded-md border border-brand-border" />
                ) : <div className="w-9 h-9 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-text-secondary"><FolderGit className="w-4 h-4" /></div>}
                <div>
                  <div className="flex items-center space-x-2.5">
                    <h3 className="font-bold text-brand-text-primary text-sm sm:text-base">
                      {exp.title}
                    </h3>
                    {exp.technologies.map((tech) => (
                      <TechBadge
                        key={tech}
                        name={tech}
                        className="py-0.5 px-2 text-[9px] font-mono text-brand-text-secondary bg-brand-surface/80"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-brand-text-secondary mt-1 max-w-sm">
                    {exp.description}
                  </p>
                </div>
              </div>

              {exp.githubUrl && (
                <a
                  href={exp.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-brand-surface border border-brand-border text-brand-text-secondary hover:text-brand-text-primary hover:border-brand-border-focus transition-all shrink-0"
                  aria-label={`View ${exp.title} on GitHub`}
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
