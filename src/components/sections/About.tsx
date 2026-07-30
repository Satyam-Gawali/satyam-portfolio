import React from "react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "../ui/SectionHeading";

export const About: React.FC = () => (
  <section id="about" className="py-24 px-6 bg-brand-bg relative border-t border-brand-border/40">
    <div className="max-w-7xl mx-auto">
      <SectionHeading eyebrow="Background" title="About Me" subtitle="How I approach software engineering and mobile development." />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-64 md:w-80 rounded-2xl border border-brand-border bg-brand-surface p-2 shadow-xl shadow-black/20">
            <Image src="/images/profile/profile.jpg" alt="Portrait of Satyam Gawali" width={1254} height={1254} sizes="(max-width: 767px) 256px, 320px" className="h-auto w-full rounded-xl" />
          </div>
        </div>
        <div className="lg:col-span-7 space-y-8">
          <p className="text-base text-brand-text-secondary leading-relaxed">{profile.aboutText}</p>
          <div className="space-y-6 pt-4">
            <div className="flex items-center space-x-2 text-sm font-mono text-brand-cyan uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Professional Focus & Education</span>
            </div>
            <div className="border-l border-brand-border/60 ml-3 pl-6 space-y-8 relative">
              {profile.timeline.map((item) => (
                <div key={item.title} className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-cyan border border-brand-bg ring-4 ring-brand-cyan/15" />
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h4 className="font-bold text-brand-text-primary text-sm sm:text-base">{item.title}</h4>
                      {item.year && <span className="text-[10px] font-mono text-brand-cyan px-2 py-0.5 rounded bg-brand-surface border border-brand-border w-fit">{item.year}</span>}
                    </div>
                    <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
