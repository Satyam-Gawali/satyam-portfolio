import React from "react";
import { Cpu, Database, ShieldCheck, Settings, Layers, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "../ui/SectionHeading";

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-5 h-5 text-brand-violet-light" />;
      case 1:
        return <Cpu className="w-5 h-5 text-brand-violet-light" />;
      case 2:
        return <Database className="w-5 h-5 text-brand-cyan" />;
      case 3:
        return <ShieldCheck className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
      case 4:
        return <Settings className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-brand-violet-light" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-brand-bg relative border-t border-brand-border">
      <div className="max-w-6xl mx-auto space-y-16">
        <SectionHeading
          eyebrow="Competencies"
          title="Skills & Technologies"
          subtitle="Core frameworks, architecture patterns, and infrastructure utilized to engineer reliable cross-platform systems."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.skills.map((category, index) => (
            <div
              key={category.title}
              className="p-6 sm:p-7 rounded-[24px] bg-brand-surface/80 border border-brand-card-border hover:border-brand-border-focus backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-black/5 dark:shadow-black/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3.5 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-pill-bg border border-brand-pill-border flex items-center justify-center">
                    {getCategoryIcon(index)}
                  </div>
                  <h3 className="font-bold text-brand-text-primary text-base">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-brand-pill-bg border border-brand-pill-border text-brand-text-secondary hover:text-brand-text-primary hover:border-brand-violet/40 transition-all duration-150"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
