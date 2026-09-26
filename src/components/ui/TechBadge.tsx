import React from "react";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-mono font-medium bg-brand-pill-bg border border-brand-pill-border text-brand-text-secondary hover:text-brand-text-primary hover:border-brand-violet/40 transition-colors duration-200 ${className}`}
    >
      {name}
    </span>
  );
};
