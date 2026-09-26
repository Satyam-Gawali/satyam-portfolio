"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Download, ArrowUpRight, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { links } from "@/config/links";

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-brand-bg relative border-t border-brand-border overflow-hidden"
    >
      {/* Ambient background accents */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-brand-violet/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* LEFT COLUMN — Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-violet animate-pulse" />
                <span className="text-xs font-mono font-medium tracking-widest text-brand-violet-light uppercase">
                  Contact
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-text-primary font-sans">
                Let&apos;s build together.
              </h2>
              <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed max-w-lg font-sans">
                Open to mobile development, Flutter engineering roles, and product collaboration. Reach out directly.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              {links.email && (
                <a
                  href={`mailto:${links.email}`}
                  className="group flex items-start space-x-3.5 p-4 rounded-2xl bg-brand-surface/80 border border-brand-card-border hover:border-brand-border-focus hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-black/5 dark:shadow-black/20"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-violet/10 border border-brand-violet/25 flex items-center justify-center shrink-0 group-hover:bg-brand-violet/20 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-brand-violet-light" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider">Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-brand-text-primary group-hover:text-brand-violet-light transition-colors duration-300 truncate max-w-[180px] sm:max-w-none">
                      {links.email}
                    </div>
                  </div>
                </a>
              )}

              {/* Location */}
              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-brand-surface/80 border border-brand-card-border shadow-lg shadow-black/5 dark:shadow-black/20">
                <div className="w-9 h-9 rounded-xl bg-brand-pill-bg border border-brand-pill-border flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-brand-cyan" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-brand-text-primary">India / Remote</div>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-brand-surface/80 border border-brand-card-border sm:col-span-2 shadow-lg shadow-black/5 dark:shadow-black/20">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider">Availability</div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      Open to mobile engineering opportunities
                    </span>
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
                  className="p-3 rounded-full bg-brand-pill-bg border border-brand-pill-border hover:bg-brand-surface-hover hover:border-brand-border-focus text-brand-text-secondary hover:text-brand-text-primary transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {links.linkedin && (
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-brand-pill-bg border border-brand-pill-border hover:bg-brand-surface-hover hover:border-brand-border-focus text-brand-text-secondary hover:text-brand-text-primary transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Premium Contact Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-5"
          >
            <div className="p-6 sm:p-8 rounded-[28px] bg-gradient-to-b from-brand-card-bg-gradient-from to-brand-card-bg-gradient-to border border-brand-card-border hover:border-brand-border-focus backdrop-blur-xl shadow-2xl shadow-black/5 dark:shadow-black/50 space-y-5 transition-all duration-300">
              <div className="space-y-1 pb-4 border-b border-brand-border">
                <h3 className="text-lg font-bold text-brand-text-primary">Quick Connect</h3>
                <p className="text-xs font-mono text-brand-text-muted">Choose your preferred channel</p>
              </div>

              {/* Action Links */}
              <div className="space-y-3">
                {links.email && (
                  <a
                    href={`mailto:${links.email}`}
                    className="group flex items-center justify-between p-3.5 rounded-2xl bg-brand-primary-btn-bg text-brand-primary-btn-text font-bold text-xs hover:opacity-90 transition-all duration-300 shadow-xl hover:-translate-y-0.5"
                  >
                    <span className="flex items-center space-x-2.5">
                      <Send className="w-4 h-4" />
                      <span>Send Direct Email</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                )}

                {links.linkedin && (
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3.5 rounded-2xl bg-brand-pill-bg border border-brand-pill-border text-xs font-semibold text-brand-text-primary hover:border-brand-border-focus hover:bg-brand-surface-hover hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="flex items-center space-x-2.5">
                      <LinkedinIcon className="w-4 h-4 text-brand-violet-light" />
                      <span>Connect on LinkedIn</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-brand-text-muted group-hover:text-brand-text-primary transition-all duration-300" />
                  </a>
                )}

                {links.github && (
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3.5 rounded-2xl bg-brand-pill-bg border border-brand-pill-border text-xs font-semibold text-brand-text-primary hover:border-brand-border-focus hover:bg-brand-surface-hover hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="flex items-center space-x-2.5">
                      <GithubIcon className="w-4 h-4 text-brand-text-secondary" />
                      <span>View GitHub Profile</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-brand-text-muted group-hover:text-brand-text-primary transition-all duration-300" />
                  </a>
                )}

                {links.resume && (
                  <a
                    href={links.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3.5 rounded-2xl bg-brand-pill-bg border border-brand-pill-border text-xs font-semibold text-brand-text-primary hover:border-brand-border-focus hover:bg-brand-surface-hover hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="flex items-center space-x-2.5">
                      <Download className="w-4 h-4 text-brand-cyan" />
                      <span>Download PDF Resume</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-brand-text-muted group-hover:text-brand-text-primary transition-all duration-300" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};