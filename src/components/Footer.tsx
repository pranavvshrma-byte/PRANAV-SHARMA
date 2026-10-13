import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#38281e] bg-[#140f0c] py-12 text-[#a89585] text-xs">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Summary */}
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-display font-bold text-[#f5ebe0] text-base">
              {PORTFOLIO_DATA.profile.name}
            </p>
            <p className="text-[#8c7a6c]">
              B.Tech Computer Science & Engineering (Core) · VIT Vellore
            </p>
          </div>

          {/* Clean unboxed navigation links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[#b8a798]">
            <a href="#about" className="hover:text-[#d4a373] transition-colors">About</a>
            <a href="#academics" className="hover:text-[#d4a373] transition-colors">Academics</a>
            <a href="#showcase" className="hover:text-[#d4a373] transition-colors">Showcase</a>
            <a href="#skills" className="hover:text-[#d4a373] transition-colors">Skills</a>
            <button
              onClick={onOpenResume}
              className="hover:text-[#d4a373] transition-colors cursor-pointer"
            >
              Resume PDF
            </button>
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#3d2c20] bg-[#241a14] text-[#e6d7cb] hover:text-[#f5ebe0] hover:bg-[#31231a] transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#d4a373]" />
          </button>
        </div>

        {/* Quiet Copyright & Disclaimers */}
        <div className="mt-8 pt-6 border-t border-[#2a1e16] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7d6b5e] font-mono">
          <p>© {new Date().getFullYear()} Pranav Sharma. All rights reserved.</p>
          <p>Official portfolio generated from verified academic & co-curricular resume.</p>
        </div>
      </div>
    </footer>
  );
};
