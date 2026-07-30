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
        <span className="text-xs md:text-sm font-semibold tracking-widest text-brand-cyan uppercase mb-2 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-text-primary mb-4 font-sans">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-brand-text-secondary leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
