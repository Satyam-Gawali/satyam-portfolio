"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, ShieldCheck, Layers, Database, Radio, Sparkles } from "lucide-react";

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[34rem] aspect-square flex items-center justify-center select-none pointer-events-none">
      {/* 1. Large Glowing Gradient Orb */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.65, 0.45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-brand-cyan/25 via-brand-primary/30 to-brand-secondary/25 blur-3xl -z-10"
      />

      {/* Secondary Ambient Glow */}
      <motion.div
        animate={{
          scale: [1.05, 0.95, 1.05],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute w-60 h-60 rounded-full bg-brand-cyan/20 blur-2xl -z-10"
      />

      {/* 2. Subtle Background Grid Pattern */}
      <div className="absolute inset-0 rounded-3xl border border-brand-cyan/15 bg-brand-surface/30 backdrop-blur-2xl overflow-hidden -z-10 shadow-2xl shadow-black/50">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08]"
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
                className="text-brand-cyan"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
        </svg>

        {/* Ambient Top Light Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-brand-cyan/15 to-transparent blur-xl pointer-events-none" />
      </div>

      {/* 3. Central Core Architecture Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.6 },
          scale: { duration: 0.6 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative z-20 w-[82%] p-5 sm:p-6 rounded-2xl bg-brand-surface-card/80 border border-brand-cyan/35 backdrop-blur-xl shadow-2xl shadow-black/60 space-y-4"
      >
        {/* Core Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-brand-cyan" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-brand-text-primary tracking-wide">
                Flutter Architecture
              </div>
              <div className="text-[10px] font-mono text-brand-text-muted">
                Cross-Platform Core
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] font-mono font-semibold text-emerald-400 uppercase tracking-wider">
              60 FPS
            </span>
          </div>
        </div>

        {/* Code / State Architecture Snippet representation */}
        <div className="p-3 rounded-xl bg-brand-bg/80 border border-brand-border/60 font-mono text-xs space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-brand-text-muted">
            <span>stateManager</span>
            <span className="text-brand-cyan">Riverpod</span>
          </div>
          <div className="text-brand-text-secondary text-[11px] leading-relaxed">
            <span className="text-brand-secondary">class</span>{" "}
            <span className="text-brand-text-primary font-bold">AppEngine</span>{" "}
            <span className="text-brand-cyan">extends</span> StateNotifier &#123;
          </div>
          <div className="pl-3 text-[10px] text-brand-text-muted flex items-center space-x-2">
            <Zap className="w-3 h-3 text-amber-400 shrink-0" />
            <span>onDeviceML: enabled</span>
          </div>
          <div className="pl-3 text-[10px] text-brand-text-muted flex items-center space-x-2">
            <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>offlineFirst: true</span>
          </div>
          <div className="text-brand-text-secondary text-[11px]">&#125;</div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-2 pt-1 border-t border-brand-border/40 text-center font-mono">
          <div className="p-1.5 rounded-lg bg-brand-surface/60 border border-brand-border/30">
            <div className="text-[9px] text-brand-text-muted uppercase">Engine</div>
            <div className="text-xs font-bold text-brand-cyan">Dart 3.x</div>
          </div>
          <div className="p-1.5 rounded-lg bg-brand-surface/60 border border-brand-border/30">
            <div className="text-[9px] text-brand-text-muted uppercase">Platform</div>
            <div className="text-xs font-bold text-brand-text-primary">Android</div>
          </div>
          <div className="p-1.5 rounded-lg bg-brand-surface/60 border border-brand-border/30">
            <div className="text-[9px] text-brand-text-muted uppercase">Sync</div>
            <div className="text-xs font-bold text-brand-secondary">Realtime</div>
          </div>
        </div>
      </motion.div>

      {/* 4. Floating Glass Cards around central core */}

      {/* Floating Card 1: Top Left — Flutter & Dart */}
      <motion.div
        initial={{ opacity: 0, x: -16, y: -16 }}
        animate={{ opacity: 1, x: 0, y: [0, -7, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.15 },
          x: { duration: 0.6, delay: 0.15 },
          y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
        }}
        className="absolute -top-2 left-2 sm:left-4 z-30 px-3.5 py-2.5 rounded-xl bg-brand-surface/75 border border-brand-cyan/30 backdrop-blur-md shadow-xl shadow-black/40 flex items-center space-x-2.5"
      >
        <div className="w-6 h-6 rounded-md bg-brand-cyan/20 flex items-center justify-center">
          <Layers className="w-3.5 h-3.5 text-brand-cyan" />
        </div>
        <div>
          <div className="text-xs font-bold font-mono text-brand-text-primary">Flutter</div>
          <div className="text-[9px] font-mono text-brand-cyan">Material 3 UI</div>
        </div>
      </motion.div>

      {/* Floating Card 2: Top Right — On-Device AI */}
      <motion.div
        initial={{ opacity: 0, x: 16, y: -16 }}
        animate={{ opacity: 1, x: 0, y: [0, 7, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.25 },
          x: { duration: 0.6, delay: 0.25 },
          y: { duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
        }}
        className="absolute top-4 -right-2 sm:-right-4 z-30 px-3.5 py-2.5 rounded-xl bg-brand-surface/75 border border-brand-secondary/30 backdrop-blur-md shadow-xl shadow-black/40 flex items-center space-x-2.5"
      >
        <div className="w-6 h-6 rounded-md bg-brand-secondary/20 flex items-center justify-center">
          <Sparkles className="w-3.5 h-3.5 text-brand-secondary" />
        </div>
        <div>
          <div className="text-xs font-bold font-mono text-brand-text-primary">On-Device AI</div>
          <div className="text-[9px] font-mono text-brand-secondary">Google ML Kit</div>
        </div>
      </motion.div>

      {/* Floating Card 3: Bottom Left — Firebase Realtime */}
      <motion.div
        initial={{ opacity: 0, x: -16, y: 16 }}
        animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.35 },
          x: { duration: 0.6, delay: 0.35 },
          y: { duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        className="absolute bottom-6 -left-2 sm:-left-4 z-30 px-3.5 py-2.5 rounded-xl bg-brand-surface/75 border border-amber-500/30 backdrop-blur-md shadow-xl shadow-black/40 flex items-center space-x-2.5"
      >
        <div className="w-6 h-6 rounded-md bg-amber-500/20 flex items-center justify-center">
          <Database className="w-3.5 h-3.5 text-amber-400" />
        </div>
        <div>
          <div className="text-xs font-bold font-mono text-brand-text-primary">Firebase</div>
          <div className="text-[9px] font-mono text-amber-400">Realtime DB & Auth</div>
        </div>
      </motion.div>

      {/* Floating Card 4: Bottom Right — P2P & REST */}
      <motion.div
        initial={{ opacity: 0, x: 16, y: 16 }}
        animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.45 },
          x: { duration: 0.6, delay: 0.45 },
          y: { duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
        }}
        className="absolute -bottom-2 right-2 sm:right-4 z-30 px-3.5 py-2.5 rounded-xl bg-brand-surface/75 border border-brand-cyan/30 backdrop-blur-md shadow-xl shadow-black/40 flex items-center space-x-2.5"
      >
        <div className="w-6 h-6 rounded-md bg-brand-cyan/20 flex items-center justify-center">
          <Radio className="w-3.5 h-3.5 text-brand-cyan" />
        </div>
        <div>
          <div className="text-xs font-bold font-mono text-brand-text-primary">P2P & REST APIs</div>
          <div className="text-[9px] font-mono text-brand-cyan">Bluetooth & Hive</div>
        </div>
      </motion.div>

      {/* Floating Technology Pills */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-1/2 -left-6 -translate-y-1/2 z-20 hidden md:block px-2.5 py-1 rounded-full bg-brand-surface/60 border border-brand-border text-[10px] font-mono font-semibold text-brand-text-secondary backdrop-blur-sm"
      >
        Git & GitHub
      </motion.div>

      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute top-1/2 -right-6 -translate-y-1/2 z-20 hidden md:block px-2.5 py-1 rounded-full bg-brand-surface/60 border border-brand-border text-[10px] font-mono font-semibold text-brand-text-secondary backdrop-blur-sm"
      >
        Riverpod
      </motion.div>
    </div>
  );
};
