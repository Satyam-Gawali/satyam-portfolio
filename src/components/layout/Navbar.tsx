"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { links } from "@/config/links";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Handle scroll border shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
    { label: "Home", href: isHomePage ? "#home" : "/#home" },
    { label: "Work", href: isHomePage ? "#work" : "/#work" },
    { label: "Open Source", href: isHomePage ? "#open-source" : "/#open-source" },
    { label: "About", href: isHomePage ? "#about" : "/#about" },
    { label: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage && href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Account for the 64px fixed navbar + 8px breathing room
        const navbarHeight = 72;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementTop - navbarHeight, behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/85 backdrop-blur-md border-b border-brand-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark logo */}
        <Link
          href={isHomePage ? "#home" : "/"}
          className="text-xl font-bold tracking-tight text-brand-text-primary hover:text-brand-cyan transition-colors"
          onClick={(e) => isHomePage && handleLinkClick(e, "#home")}
        >
          Satyam<span className="text-brand-cyan">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors duration-200"
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side CTA / Social icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-brand-text-secondary hover:text-brand-text-primary transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          )}
          {links.resume && (
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-brand-surface border border-brand-border text-sm font-semibold text-brand-cyan hover:bg-brand-surface-hover hover:border-brand-cyan/40 transition-all duration-200"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-brand-text-secondary hover:text-brand-text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer (Smooth transitions) */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-brand-bg transition-all duration-300 md:hidden flex flex-col justify-between p-8 border-t border-brand-border/40 ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xl font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors"
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col space-y-4 pt-6 border-t border-brand-border/40">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-lg font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <GithubIcon className="w-5 h-5 text-brand-cyan" />
              <span>Explore GitHub</span>
            </a>
          )}
          {links.resume && (
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-brand-surface border border-brand-border text-brand-cyan hover:bg-brand-surface-hover font-semibold transition-all"
              onClick={() => setIsOpen(false)}
            >
              <FileText className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};
