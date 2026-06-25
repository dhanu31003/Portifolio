"use client";

import { personalInfo } from "@/data/portfolio-data";
import { Mail, Heart } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/5 bg-bg-primary">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-1">{personalInfo.name}</h3>
            <p className="text-sm font-medium text-text-tertiary">
              {personalInfo.title}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-text-secondary hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-text-tertiary">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with Next.js, Tailwind & <Heart size={12} className="text-accent-pink" />
          </p>
        </div>
      </div>
    </footer>
  );
}
