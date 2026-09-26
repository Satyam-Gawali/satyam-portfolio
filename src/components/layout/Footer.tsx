"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/config/links";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!isHomePage) return;

    const element = document.getElementById(id);
    if (element) {
      e.preventDefault();
      const navbarHeight = 80;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementTop - navbarHeight, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-brand-bg border-t border-brand-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Info */}
        <div className="text-center md:text-left space-y-1">
          <div className="text-sm font-bold text-brand-text-primary">
            Satyam Gawali
          </div>
          <p className="text-xs text-brand-text-muted font-mono">
            Flutter Developer & Mobile Engineer
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {[
            { label: "Work", id: "work" },
            { label: "Open Source", id: "open-source" },
            { label: "Experience", id: "experience" },
            { label: "Skills", id: "skills" },
            { label: "About", id: "about" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={isHomePage ? `#${item.id}` : `/#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className="text-xs font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Social / Technical Details */}
        <div className="flex flex-col items-center md:items-end space-y-1 text-xs text-brand-text-muted font-mono">
          <div className="flex space-x-4">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-text-primary transition-colors"
              >
                GitHub
              </a>
            )}
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-text-primary transition-colors"
              >
                LinkedIn
              </a>
            )}
          </div>
          <div>
            &copy; {currentYear} Satyam Gawali
          </div>
        </div>
      </div>
    </footer>
  );
};
