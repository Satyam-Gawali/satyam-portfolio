"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, ShieldCheck, Layers, Database, Radio, Sparkles } from "lucide-react";

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[32rem] aspect-square flex items-center justify-center select-none pointer-events-none">
      {/* 1. Large Glowing Gradient Orb */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-gradient-to-tr from-brand-violet/20 via-brand-indigo/25 to-brand-cyan/20 blur-3xl -z-10"
      />

      {/* 2. Subtle Bento Glass Backplate */}
      <div className="absolute inset-0 rounded-[28px] border border-brand-card-border bg-brand-surface/40 backdrop-blur-2xl overflow-hidden -z-10 shadow-2xl shadow-black/10 dark:shadow-black/60">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06] text-brand-text-primary"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid-pattern"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
        </svg>

        {/* Ambient Top Light Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-brand-violet/10 to-transparent blur-xl pointer-events-none" />
      </div>

      {/* 3. Central Core Architecture Bento Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
        transition={{
          opacity: { duration: 0.6 },
          scale: { duration: 0.6 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative z-20 w-[84%] p-5 sm:p-6 rounded-2xl bg-brand-surface-card/90 border border-brand-card-border backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-black/80 space-y-4"
      >
        {/* Core Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-violet/15 border border-brand-violet/30 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-brand-violet-light" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-brand-text-primary tracking-wide">
                Flutter Architecture
              </div>
              <div className="text-[10px] font-mono text-brand-text-muted">
                Riverpod · Clean Core
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] font-mono font-semibold text-emerald-500 dark:text-emerald-400 uppercase tracking-wider">
              60 FPS
            </span>
          </div>
        </div>

        {/* Code / State Architecture Snippet */}
        <div className="p-3 rounded-xl bg-brand-bg/90 border border-brand-border font-mono text-xs space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-brand-text-muted">
            <span>stateEngine</span>
            <span className="text-brand-violet-light">AsyncNotifier</span>
          </div>
          <div className="text-brand-text-secondary text-[11px] leading-relaxed">
            <span className="text-brand-indigo">final</span>{" "}
            <span className="text-brand-text-primary font-bold">mobileCore</span>{" "}
            <span className="text-brand-violet-light">=</span> Provider &#123;
          </div>
          <div className="pl-3 text-[10px] text-brand-text-muted flex items-center space-x-2">
            <Zap className="w-3 h-3 text-amber-500 shrink-0" />
            <span>onDeviceML: enabled</span>
          </div>
          <div className="pl-3 text-[10px] text-brand-text-muted flex items-center space-x-2">
            <ShieldCheck className="w-3 h-3 text-emerald-500 shrink-0" />
            <span>offlineFirst: true</span>
          </div>
          <div className="text-brand-text-secondary text-[11px]">&#125;;</div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-2 pt-1 border-t border-brand-border text-center font-mono">
          <div className="p-1.5 rounded-lg bg-brand-pill-bg border border-brand-pill-border">
            <div className="text-[9px] text-brand-text-muted uppercase">Engine</div>
            <div className="text-xs font-bold text-brand-violet-light">Dart 3.x</div>
          </div>
          <div className="p-1.5 rounded-lg bg-brand-pill-bg border border-brand-pill-border">
            <div className="text-[9px] text-brand-text-muted uppercase">Platform</div>
            <div className="text-xs font-bold text-brand-text-primary">Android</div>
          </div>
          <div className="p-1.5 rounded-lg bg-brand-pill-bg border border-brand-pill-border">
            <div className="text-[9px] text-brand-text-muted uppercase">Sync</div>
            <div className="text-xs font-bold text-brand-cyan">Realtime</div>
          </div>
        </div>
      </motion.div>

      {/* 4. Floating Glass Bento Badges */}
      {/* Floating Badge 1: Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -16, y: -16 }}
        animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.15 },
          y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
        }}
        className="absolute -top-2 left-2 sm:left-4 z-30 px-3 py-2 rounded-xl bg-brand-surface/90 border border-brand-card-border backdrop-blur-md shadow-xl flex items-center space-x-2"
      >
        <div className="w-5 h-5 rounded-md bg-brand-violet/20 flex items-center justify-center">
          <Layers className="w-3 h-3 text-brand-violet-light" />
        </div>
        <div>
          <div className="text-[11px] font-bold font-mono text-brand-text-primary">Flutter</div>
          <div className="text-[9px] font-mono text-brand-violet-light">Material 3</div>
        </div>
      </motion.div>

      {/* Floating Badge 2: Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 16, y: -16 }}
        animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.25 },
          y: { duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
        }}
        className="absolute top-4 -right-2 sm:-right-4 z-30 px-3 py-2 rounded-xl bg-brand-surface/90 border border-brand-card-border backdrop-blur-md shadow-xl flex items-center space-x-2"
      >
        <div className="w-5 h-5 rounded-md bg-brand-cyan/20 flex items-center justify-center">
          <Sparkles className="w-3 h-3 text-brand-cyan" />
        </div>
        <div>
          <div className="text-[11px] font-bold font-mono text-brand-text-primary">On-Device AI</div>
          <div className="text-[9px] font-mono text-brand-cyan">Google ML Kit</div>
        </div>
      </motion.div>

      {/* Floating Badge 3: Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -16, y: 16 }}
        animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.35 },
          y: { duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        className="absolute bottom-6 -left-2 sm:-left-4 z-30 px-3 py-2 rounded-xl bg-brand-surface/90 border border-brand-card-border backdrop-blur-md shadow-xl flex items-center space-x-2"
      >
        <div className="w-5 h-5 rounded-md bg-amber-500/20 flex items-center justify-center">
          <Database className="w-3 h-3 text-amber-500" />
        </div>
        <div>
          <div className="text-[11px] font-bold font-mono text-brand-text-primary">Firebase</div>
          <div className="text-[9px] font-mono text-amber-500">Auth & Firestore</div>
        </div>
      </motion.div>

      {/* Floating Badge 4: Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 16, y: 16 }}
        animate={{ opacity: 1, x: 0, y: [0, 7, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.45 },
          y: { duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
        }}
        className="absolute -bottom-2 right-2 sm:right-4 z-30 px-3 py-2 rounded-xl bg-brand-surface/90 border border-brand-card-border backdrop-blur-md shadow-xl flex items-center space-x-2"
      >
        <div className="w-5 h-5 rounded-md bg-brand-indigo/20 flex items-center justify-center">
          <Radio className="w-3 h-3 text-brand-indigo" />
        </div>
        <div>
          <div className="text-[11px] font-bold font-mono text-brand-text-primary">Local Storage</div>
          <div className="text-[9px] font-mono text-brand-indigo">Hive & SQLite</div>
        </div>
      </motion.div>
    </div>
  );
};
