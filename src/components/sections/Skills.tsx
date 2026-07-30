import React from "react";
import { Cpu, Terminal, Database, ShieldCheck, Settings, Layers } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "../ui/SectionHeading";

export const Skills: React.FC = () => {
  // Map index to a matching category icon
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="w-5 h-5 text-brand-cyan" />;
      case 1:
        return <Layers className="w-5 h-5 text-brand-cyan" />;
      case 2:
        return <Database className="w-5 h-5 text-brand-cyan" />;
      case 3:
        return <ShieldCheck className="w-5 h-5 text-brand-cyan" />;
      case 4:
        return <Settings className="w-5 h-5 text-brand-cyan" />;
      default:
        return <Cpu className="w-5 h-5 text-brand-cyan" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-brand-bg relative border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Competencies"
          title="Tools I Work With"
          subtitle="Categorized tech stacks and frameworks applied to construct maintainable mobile architectures, local storage, and real-time systems."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.skills.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border hover:border-brand-border-focus transition-all duration-200"
            >
              <div className="flex items-center space-x-3 mb-5">
                <div className="p-2 rounded-lg bg-brand-bg border border-brand-border flex items-center justify-center">
                  {getCategoryIcon(index)}
                </div>
                <h3 className="font-bold text-brand-text-primary text-sm sm:text-base">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-brand-bg border border-brand-border/60 text-brand-text-secondary hover:text-brand-text-primary hover:border-brand-cyan/30 transition-all duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
