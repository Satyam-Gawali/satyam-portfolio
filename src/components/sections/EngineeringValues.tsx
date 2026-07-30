import React from "react";
import { UserCheck, Code, Eye, RefreshCw } from "lucide-react";
import { profile } from "@/data/profile";

export const EngineeringValues: React.FC = () => {
  // Map value icons
  const getValueIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <UserCheck className="w-5 h-5 text-brand-cyan" />;
      case 1:
        return <Code className="w-5 h-5 text-brand-cyan" />;
      case 2:
        return <Eye className="w-5 h-5 text-brand-cyan" />;
      default:
        return <RefreshCw className="w-5 h-5 text-brand-cyan" />;
    }
  };

  return (
    <section className="py-20 px-6 bg-brand-bg relative border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-brand-cyan uppercase mb-2">
            Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text-primary">
            Engineering Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.values.map((val, idx) => (
            <div
              key={val.title}
              className="p-6 rounded-2xl bg-brand-surface/40 border border-brand-border/50 flex flex-col space-y-4 hover:border-brand-cyan/20 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-bg border border-brand-border flex items-center justify-center">
                {getValueIcon(idx)}
              </div>
              <h3 className="font-bold text-brand-text-primary text-sm sm:text-base">
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
