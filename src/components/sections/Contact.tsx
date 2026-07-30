"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Download, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { links } from "@/config/links";

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-brand-bg relative border-t border-brand-border/40 overflow-hidden"
    >
      {/* Ambient background accents */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-brand-cyan/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-brand-secondary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN — Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs md:text-sm font-semibold tracking-widest text-brand-cyan uppercase block">
                Contact
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-text-primary font-sans">
                Let&apos;s Work Together
              </h2>
              <p className="text-base md:text-lg text-brand-text-secondary leading-relaxed max-w-lg font-sans">
                I&apos;m open to Flutter development, mobile engineering, and software
                opportunities. Feel free to reach out.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              {links.email && (
                <a
                  href={`mailto:${links.email}`}
                  className="group flex items-start space-x-3 p-4 rounded-xl bg-brand-surface/50 border border-brand-border hover:border-brand-cyan/35 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center shrink-0 group-hover:bg-brand-cyan/15 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-brand-text-muted uppercase tracking-wider">Email</div>
                    <div className="text-sm font-semibold text-brand-text-primary group-hover:text-brand-cyan transition-colors duration-300">
                      {links.email}
                    </div>
                  </div>
                </a>
              )}

              {/* Location */}
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-brand-surface/50 border border-brand-border">
                <div className="w-9 h-9 rounded-lg bg-brand-secondary/10 border border-brand-secondary/25 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-brand-secondary" />
                </div>
                <div>
                  <div className="text-xs font-mono text-brand-text-muted uppercase tracking-wider">Location</div>
                  <div className="text-sm font-semibold text-brand-text-primary">India</div>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-brand-surface/50 border border-brand-border">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-mono text-brand-text-muted uppercase tracking-wider">Availability</div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm font-semibold text-emerald-400">Open to Opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center space-x-3 pt-2">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-brand-surface border border-brand-border hover:bg-brand-surface-hover hover:border-brand-border-focus text-brand-text-secondary hover:text-brand-text-primary transition-all duration-200"
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
                  className="p-3 rounded-xl bg-brand-surface border border-brand-border hover:bg-brand-surface-hover hover:border-brand-border-focus text-brand-text-secondary hover:text-brand-text-primary transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Premium Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-5"
          >
            <div className="p-[1px] rounded-2xl bg-gradient-to-br from-brand-cyan/30 via-brand-border/50 to-brand-secondary/30">
              <div className="p-6 sm:p-8 rounded-[calc(1rem-1px)] bg-brand-surface/80 backdrop-blur-xl shadow-2xl shadow-black/30 space-y-5">
                {/* Card header */}
                <div className="text-center space-y-2 pb-4 border-b border-brand-border/40">
                  <h3 className="text-lg font-bold text-brand-text-primary">Quick Connect</h3>
                  <p className="text-xs font-mono text-brand-text-muted">Choose how you&apos;d like to reach out</p>
                </div>

                {/* Action links */}
                <div className="space-y-3">
                  {/* Email CTA */}
                  {links.email && (
                    <a
                      href={`mailto:${links.email}`}
                      className="group flex items-center justify-between p-3.5 rounded-xl bg-brand-cyan text-brand-bg font-bold text-sm hover:bg-brand-cyan/90 transition-all duration-300 shadow-lg shadow-brand-cyan/15 hover:-translate-y-0.5"
                    >
                      <span className="flex items-center space-x-2.5">
                        <Mail className="w-4 h-4" />
                        <span>Send an Email</span>
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  )}

                  {/* LinkedIn */}
                  {links.linkedin && (
                    <a
                      href={links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3.5 rounded-xl bg-brand-bg/80 border border-brand-border text-sm font-semibold text-brand-text-primary hover:border-brand-cyan/35 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <span className="flex items-center space-x-2.5">
                        <LinkedinIcon className="w-4 h-4 text-brand-cyan" />
                        <span>Connect on LinkedIn</span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-brand-text-muted group-hover:text-brand-cyan group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  )}

                  {/* GitHub */}
                  {links.github && (
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3.5 rounded-xl bg-brand-bg/80 border border-brand-border text-sm font-semibold text-brand-text-primary hover:border-brand-cyan/35 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <span className="flex items-center space-x-2.5">
                        <GithubIcon className="w-4 h-4 text-brand-text-secondary" />
                        <span>View on GitHub</span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-brand-text-muted group-hover:text-brand-cyan group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  )}

                  {/* Download Resume */}
                  {links.resume && (
                    <a
                      href={links.resume}
                      download
                      className="group flex items-center justify-between p-3.5 rounded-xl bg-brand-bg/80 border border-brand-border text-sm font-semibold text-brand-text-primary hover:border-brand-cyan/35 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <span className="flex items-center space-x-2.5">
                        <Download className="w-4 h-4 text-brand-cyan" />
                        <span>Download Resume</span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-brand-text-muted group-hover:text-brand-cyan group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};