import React from "react";
import { Cpu, Terminal, Database, Layers, Globe, Radio } from "lucide-react";

interface TechItemProps {
  name: string;
  icon: React.ReactNode;
}

const TechItem: React.FC<TechItemProps> = ({ name, icon }) => {
  return (
    <div className="flex items-center space-x-2 px-3.5 py-1.5 bg-brand-pill-bg border border-brand-pill-border rounded-full hover:border-brand-border-focus hover:bg-brand-surface-hover transition-all duration-200">
      <span className="text-brand-violet-light">{icon}</span>
      <span className="text-xs font-mono font-medium tracking-wide text-brand-text-secondary">{name}</span>
    </div>
  );
};

export const TechnologyStrip: React.FC = () => {
  const techStack = [
    { name: "Flutter 3.x", icon: <Layers className="w-3.5 h-3.5" /> },
    { name: "Dart", icon: <Terminal className="w-3.5 h-3.5" /> },
    { name: "Riverpod", icon: <Cpu className="w-3.5 h-3.5" /> },
    { name: "Firebase & Firestore", icon: <Database className="w-3.5 h-3.5" /> },
    { name: "REST APIs & P2P", icon: <Globe className="w-3.5 h-3.5" /> },
    { name: "Hive & SQLite", icon: <Radio className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="w-full bg-brand-bg py-6 border-y border-brand-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {techStack.map((tech) => (
            <TechItem key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};
