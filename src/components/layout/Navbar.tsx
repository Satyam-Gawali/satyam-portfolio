"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { links } from "@/config/links";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Handle scroll border shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Work", href: isHomePage ? "#work" : "/#work" },
    { label: "Open Source", href: isHomePage ? "#open-source" : "/#open-source" },
    { label: "Experience", href: isHomePage ? "#experience" : "/#experience" },
    { label: "Skills", href: isHomePage ? "#skills" : "/#skills" },
    { label: "About", href: isHomePage ? "#about" : "/#about" },
    { label: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage && href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 80;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementTop - navbarHeight, behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 py-4">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-6 h-14 flex items-center justify-between ${
          scrolled
            ? "bg-brand-surface/85 backdrop-blur-xl border border-brand-card-border shadow-2xl shadow-black/10 dark:shadow-black/50"
            : "bg-brand-surface/40 backdrop-blur-md border border-brand-card-border"
        }`}
      >
        {/* Wordmark logo */}
        <Link
          href={isHomePage ? "#home" : "/"}
          className="group flex items-center space-x-1.5 text-base font-bold tracking-tight text-brand-text-primary"
          onClick={(e) => isHomePage && handleLinkClick(e, "#home")}
        >
          <span className="group-hover:text-brand-violet-light transition-colors">Satyam Gawali</span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-violet animate-pulse" />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-pill-bg transition-all duration-200"
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side CTA / Social icons / ThemeToggle (Desktop) */}
        <div className="hidden md:flex items-center space-x-2.5">
          <ThemeToggle />
          
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-pill-bg rounded-full transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {links.resume && (
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-brand-pill-bg border border-brand-card-border text-xs font-semibold text-brand-text-primary hover:bg-brand-surface-hover hover:border-brand-violet/40 transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5 text-brand-violet-light" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          )}
        </div>

        {/* Mobile menu and Theme Toggle */}
        <div className="flex md:hidden items-center space-x-1">
          <ThemeToggle />
          <button
            className="p-2 text-brand-text-secondary hover:text-brand-text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-4 top-20 z-40 rounded-3xl bg-brand-surface/95 backdrop-blur-2xl border border-brand-card-border shadow-2xl transition-all duration-300 md:hidden flex flex-col justify-between p-6 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-4 py-2.5 rounded-xl text-base font-medium text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-pill-bg transition-colors"
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-6 mt-4 border-t border-brand-border">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-brand-pill-bg border border-brand-border text-xs font-semibold text-brand-text-secondary hover:text-brand-text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}
          {links.resume && (
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-brand-violet text-white text-xs font-bold hover:bg-brand-violet/90 transition-all shadow-lg shadow-brand-violet/20"
              onClick={() => setIsOpen(false)}
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
};
