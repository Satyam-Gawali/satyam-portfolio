import React from "react";
import { UserCheck, Code, Eye, RefreshCw } from "lucide-react";
import { profile } from "@/data/profile";

export const EngineeringValues: React.FC = () => {
  const getValueIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <UserCheck className="w-5 h-5 text-brand-violet-light" />;
      case 1:
        return <Code className="w-5 h-5 text-brand-cyan" />;
      case 2:
        return <Eye className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
      default:
        return <RefreshCw className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
    }
  };

  return (
    <section className="py-20 px-6 bg-brand-bg relative border-t border-brand-border">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-mono font-medium tracking-widest text-brand-violet-light uppercase mb-2">
            Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-text-primary">
            Engineering Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.values.map((val, idx) => (
            <div
              key={val.title}
              className="p-6 rounded-[24px] bg-brand-surface/80 border border-brand-card-border hover:border-brand-border-focus flex flex-col space-y-4 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/5 dark:shadow-black/50"
            >
              <div className="w-11 h-11 rounded-2xl bg-brand-pill-bg border border-brand-pill-border flex items-center justify-center">
                {getValueIcon(idx)}
              </div>
              <h3 className="font-bold text-brand-text-primary text-base">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
