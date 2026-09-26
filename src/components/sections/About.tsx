import React from "react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "../ui/SectionHeading";

export const About: React.FC = () => (
  <section id="about" className="py-24 px-6 bg-brand-bg relative border-t border-brand-border">
    <div className="max-w-6xl mx-auto space-y-16">
      <SectionHeading
        eyebrow="Background"
        title="About & Engineering Journey"
        subtitle="How I approach software engineering, system architecture, and mobile development."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Bento: Portrait Card */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="w-full max-w-sm rounded-[26px] border border-brand-card-border bg-brand-surface/80 p-3 shadow-2xl shadow-black/5 dark:shadow-black/50 backdrop-blur-xl">
            <Image
              src="/images/profile/profile.jpg"
              alt="Portrait of Satyam Gawali"
              width={1254}
              height={1254}
              sizes="(max-width: 767px) 280px, 360px"
              className="h-auto w-full rounded-[20px] object-cover"
            />
            <div className="p-4 space-y-1">
              <div className="font-bold text-brand-text-primary text-base">Satyam Gawali</div>
              <div className="text-xs font-mono text-brand-violet-light">Computer Engineering Background</div>
            </div>
          </div>
        </div>

        {/* Right Bento: Bio & Timeline */}
        <div className="lg:col-span-8 space-y-8 rounded-[28px] bg-brand-surface/80 border border-brand-card-border backdrop-blur-xl p-6 sm:p-10 shadow-2xl shadow-black/5 dark:shadow-black/50">
          <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            {profile.aboutText}
          </p>

          <div className="space-y-6 pt-4 border-t border-brand-border">
            <div className="flex items-center space-x-2 text-xs font-mono text-brand-violet-light uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Milestones & Education</span>
            </div>

            <div className="border-l border-brand-border ml-2 pl-6 space-y-7 relative">
              {profile.timeline.map((item) => (
                <div key={item.title} className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-violet border border-brand-bg ring-4 ring-brand-violet/20" />
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h4 className="font-bold text-brand-text-primary text-sm sm:text-base">
                        {item.title}
                      </h4>
                      {item.year && (
                        <span className="text-[10px] font-mono text-brand-violet-light px-2.5 py-0.5 rounded-full bg-brand-pill-bg border border-brand-pill-border w-fit">
                          {item.year}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed">
                      {item.description}
                    </p>
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
