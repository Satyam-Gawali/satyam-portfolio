"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import { links } from "@/config/links";
import { HeroVisual } from "@/components/ui/HeroVisual";

export const Hero: React.FC = () => {
  const handleScrollToWork = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("work");
    if (element) {
      const navbarHeight = 72;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementTop - navbarHeight, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background visual accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Text column — content is always visible; motion adds enhancement on top */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          {/* Eyebrow Status */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            style={{ opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center space-x-2 w-fit px-3 py-1 rounded-full bg-brand-surface border border-brand-border"
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
            <span className="text-xs font-mono font-medium tracking-wide text-brand-cyan uppercase">
              Mobile App Developer
            </span>
          </motion.div>

          {/* Heading — always visible; motion provides subtle entrance */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-text-primary leading-[1.1] font-sans">
            <motion.span
              className="block"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              style={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              Building mobile
            </motion.span>
            <motion.span
              className="block"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              style={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              experiences that{" "}
              <span className="bg-gradient-to-r from-brand-cyan via-brand-primary to-brand-secondary bg-clip-text text-transparent">
                solve real problems
              </span>
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            style={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="text-base sm:text-lg lg:text-xl text-brand-text-secondary leading-relaxed max-w-2xl font-sans"
          >
            {profile.bio}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            style={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2"
          >
            <button
              onClick={handleScrollToWork}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-brand-cyan text-brand-bg font-bold hover:bg-brand-cyan/90 transition-all duration-200 shadow-lg shadow-brand-cyan/15 group cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {links.resume && (
              <a
                href={links.resume}
                download
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-brand-surface border border-brand-border font-bold text-brand-text-primary hover:bg-brand-surface-hover hover:border-brand-border-focus transition-all duration-200"
              >
                <Download className="w-4 h-4 text-brand-cyan" />
                <span>Download Resume</span>
              </a>
            )}

            {/* Social Icons */}
            <div className="flex items-center space-x-2 sm:ml-2">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-brand-surface border border-brand-border hover:bg-brand-surface-hover hover:border-brand-border-focus text-brand-text-secondary hover:text-brand-text-primary transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}
              {links.linkedin && (
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-brand-surface border border-brand-border hover:bg-brand-surface-hover hover:border-brand-border-focus text-brand-text-secondary hover:text-brand-text-primary transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Visual column — replaced mobile mockup with abstract premium HeroVisual */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};
