import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AcademicsSection } from './components/AcademicsSection';
import { ShowcaseSection } from './components/ShowcaseSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setResumeModalOpen(true);
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#140f0c] text-[#f5ebe0] flex flex-col font-sans selection:bg-[#c68b59] selection:text-[#140f0c]">
      {/* Top 3-Zone Navigation Header */}
      <Navbar
        onOpenResume={handleOpenResume}
        onOpenContact={handleOpenContact}
      />

      <main className="flex-1">
        {/* Split Hero with verified highlights strip */}
        <HeroSection
          onOpenResume={handleOpenResume}
          onOpenContact={handleOpenContact}
        />

        {/* Academics & Scholastic Distinction */}
        <AcademicsSection />

        {/* Selected Works & Bento Showcase */}
        <ShowcaseSection />

        {/* Evidence-Based Skills & Competencies */}
        <SkillsSection />

        {/* Direct Contact & Collaboration */}
        <ContactSection
          onOpenResume={handleOpenResume}
        />
      </main>

      {/* Clean Unboxed Footer */}
      <Footer
        onOpenResume={handleOpenResume}
      />

      {/* Official Printable Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
