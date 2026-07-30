import React from "react";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-surface border border-brand-border text-brand-cyan hover:border-brand-cyan/40 transition-colors duration-200 ${className}`}
    >
      {name}
    </span>
  );
};
