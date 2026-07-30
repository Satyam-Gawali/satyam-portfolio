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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-brand-bg border-t border-brand-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Brand Info */}
        <div className="text-center md:text-left">
          <div className="text-base font-bold text-brand-text-primary">
            Satyam Gawali
          </div>
          <p className="text-xs text-brand-text-secondary mt-1 font-mono uppercase tracking-wider">
            Mobile App Developer
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {[
            { label: "Work", id: "work" },
            { label: "Open Source", id: "open-source" },
            { label: "About", id: "about" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={isHomePage ? `#${item.id}` : `/#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className="text-sm text-brand-text-secondary hover:text-brand-text-primary transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Social / Technical Details */}
        <div className="flex flex-col items-center md:items-end space-y-2 text-xs text-brand-text-secondary font-mono">
          <div className="flex space-x-4">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-cyan transition-colors"
              >
                GitHub
              </a>
            )}
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-cyan transition-colors"
              >
                LinkedIn
              </a>
            )}
          </div>
          <div className="text-brand-text-muted">
            &copy; {currentYear} • Built with Next.js
          </div>
        </div>
      </div>
    </footer>
  );
};
