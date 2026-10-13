import React, { useState } from 'react';
import { Menu, X, FileText, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#38281e]/80 bg-[#18120e]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Brand Wordmark (Single element) */}
        <a
          href="#top"
          className="font-display text-xl font-bold tracking-tight text-[#f5ebe0] hover:text-[#d4a373] transition-colors whitespace-nowrap shrink-0"
        >
          Pranav Sharma
        </a>

        {/* Zone 2: 4 single-line clean text nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#cbb9aa]">
          <a
            href="#about"
            className="hover:text-[#f5ebe0] transition-colors whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a
            href="#academics"
            className="hover:text-[#f5ebe0] transition-colors whitespace-nowrap shrink-0"
          >
            Academics
          </a>
          <a
            href="#showcase"
            className="hover:text-[#f5ebe0] transition-colors whitespace-nowrap shrink-0"
          >
            Showcase
          </a>
          <a
            href="#skills"
            className="hover:text-[#f5ebe0] transition-colors whitespace-nowrap shrink-0"
          >
            Skills
          </a>
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#e6d7cb] bg-[#241a14] border border-[#3d2c20] rounded-lg hover:bg-[#31231a] hover:text-[#f5ebe0] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#d4a373]" />
            Resume
          </button>
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#18120e] bg-[#c68b59] rounded-lg hover:bg-[#b87b48] transition-colors whitespace-nowrap shrink-0 shadow-md cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 text-xs font-medium text-[#e6d7cb] bg-[#241a14] border border-[#38281e] rounded-lg"
            title="Resume"
          >
            <FileText className="w-4 h-4 text-[#d4a373]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#cbb9aa] hover:text-[#f5ebe0] rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#38281e] bg-[#1a130f]/95 px-6 py-4 space-y-3">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#cbb9aa] hover:text-[#f5ebe0] py-1"
          >
            About
          </a>
          <a
            href="#academics"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#cbb9aa] hover:text-[#f5ebe0] py-1"
          >
            Academics
          </a>
          <a
            href="#showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#cbb9aa] hover:text-[#f5ebe0] py-1"
          >
            Showcase & Experiences
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#cbb9aa] hover:text-[#f5ebe0] py-1"
          >
            Skills & Competencies
          </a>
          <div className="pt-3 border-t border-[#38281e] flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 text-xs font-semibold text-center text-[#e6d7cb] bg-[#241a14] rounded-lg"
            >
              Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex-1 py-2 text-xs font-bold text-center text-[#18120e] bg-[#c68b59] rounded-lg"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
