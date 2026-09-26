"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ScreenshotCardProps {
  src: string;
  alt: string;
}

export function ScreenshotCard({ src, alt }: ScreenshotCardProps) {
  return (
    <div className="snap-start shrink-0 group relative px-1.5 py-2">
      {/* Subtle glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/10 to-brand-cyan/0 rounded-[1.75rem] blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Main card container with combined scale and lift on hover */}
      <div className="relative overflow-hidden rounded-[1.5rem] border border-brand-border/80 bg-brand-surface/90 backdrop-blur-sm shadow-lg shadow-black/20 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:scale-105 group-hover:border-brand-cyan/40 group-hover:shadow-xl group-hover:shadow-brand-cyan/10 h-[320px] sm:h-[350px]">
        
        {/* Screenshot Image */}
        <Image
          src={src}
          alt={alt}
          width={240}
          height={380}
          className="w-auto h-full object-contain rounded-xl transition-transform duration-500 ease-in-out"
          loading="lazy"
          unoptimized
        />
        
        {/* Soft gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

export function ScreenshotCarousel({ project }: { project: Project }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const screenshots = useMemo(() => project.screenshots ?? [], [project.screenshots]);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    // Add a small buffer (e.g., 5px) for precision
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    // Run on mount
    checkScroll();

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, [screenshots]);

  if (!screenshots || screenshots.length === 0) return null;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    
    // Calculate scroll amount based on card width + gap
    const cardWidth = 250; 
    const amount = direction === "left" ? -cardWidth : cardWidth;
    
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="space-y-6 my-12 w-full">
      {/* Header & Controls Container */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-brand-border/40 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan shadow-lg shadow-brand-cyan/30" />
            <h2 className="text-2xl font-bold tracking-tight text-brand-text-primary">
              Project Gallery
            </h2>
          </div>
          <p className="mt-1 text-sm text-brand-text-secondary max-w-md">
            A curated visual walkthrough of the application interface and key features.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-3 self-end sm:self-auto bg-brand-bg/50 p-1.5 rounded-2xl border border-brand-border/50 shadow-inner">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`p-2.5 rounded-xl transition-all active:scale-95 ${
              canScrollLeft
                ? "bg-brand-surface text-brand-text-primary hover:text-brand-cyan hover:bg-brand-surface/80 shadow-sm"
                : "bg-brand-surface/50 text-brand-text-secondary/50 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`p-2.5 rounded-xl transition-all active:scale-95 ${
              canScrollRight
                ? "bg-brand-surface text-brand-text-primary hover:text-brand-cyan hover:bg-brand-surface/80 shadow-sm"
                : "bg-brand-surface/50 text-brand-text-secondary/50 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Snap Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-track-brand-bg scrollbar-thumb-brand-border hover:scrollbar-thumb-brand-border-active py-4 px-2 -mx-2 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 rounded-3xl"
        tabIndex={0}
        aria-label="Project screenshot gallery"
      >
        {screenshots.map((s, index) => (
          <ScreenshotCard key={`${s.src}-${index}`} src={s.src} alt={s.alt} />
        ))}
        {/* Padding right to ensure last item aligns perfectly with container edge */}
        <div className="shrink-0 w-1"></div>
      </div>
    </section>
  );
}