import React from "react";
import { Cpu, Terminal, Database, Layers, Globe, Radio } from "lucide-react";

interface TechItemProps {
  name: string;
  icon: React.ReactNode;
}

const TechItem: React.FC<TechItemProps> = ({ name, icon }) => {
  return (
    <div className="flex items-center space-x-2.5 px-4 py-2 bg-brand-surface/40 border border-brand-border/40 rounded-xl hover:border-brand-cyan/20 transition-colors duration-200">
      <span className="text-brand-cyan/70">{icon}</span>
      <span className="text-sm font-semibold tracking-wide text-brand-text-primary">{name}</span>
    </div>
  );
};

export const TechnologyStrip: React.FC = () => {
  const techStack = [
    { name: "Flutter", icon: <Layers className="w-4 h-4" /> },
    { name: "Dart", icon: <Terminal className="w-4 h-4" /> },
    { name: "Firebase", icon: <Database className="w-4 h-4" /> },
    { name: "Riverpod", icon: <Cpu className="w-4 h-4" /> },
    { name: "REST APIs", icon: <Globe className="w-4 h-4" /> },
    { name: "Open Source", icon: <Radio className="w-4 h-4" /> },
  ];

  return (
    <section className="w-full bg-brand-bg py-8 border-y border-brand-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {techStack.map((tech) => (
            <TechItem key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};
