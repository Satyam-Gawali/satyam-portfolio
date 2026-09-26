import React from "react";

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  eyebrow,
  title,
  subtitle,
  align = "left",
}) => {
  const isLeft = align === "left";
  return (
    <div
      id={id}
      className={`mb-12 md:mb-16 flex flex-col ${isLeft ? "text-left" : "items-center text-center max-w-3xl mx-auto"}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center space-x-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-violet animate-pulse" />
          <span className="text-xs font-mono font-medium tracking-widest text-brand-violet-light uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-text-primary mb-4 font-sans leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed max-w-2xl font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
