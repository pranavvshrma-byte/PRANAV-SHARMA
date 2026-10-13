import React from 'react';
import {
  ArrowUpRight,
  FileText,
  Mail,
  Award,
  CheckCircle2,
  GraduationCap,
  Code2,
  Trophy,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenContact }) => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="about" className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background warm coffee ambient glows */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-[#c68b59]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-0 h-80 w-80 rounded-full bg-[#d4a373]/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Split Hero: Left Column Typography, Right Column Credential Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#d4a373]">
              <span>First-Year B.Tech CSE Core</span>
              <span aria-hidden="true">·</span>
              <span>VIT Vellore</span>
              <span aria-hidden="true">·</span>
              <span>Class of 2029</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f5ebe0] text-balance leading-[1.1]">
              Engineering interactive software, games, and web experiences.
            </h1>

            <p className="text-base sm:text-lg text-[#d7ccc8] leading-relaxed max-w-2xl">
              {profile.summary}
            </p>

            {/* Quick trust points */}
            <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#b8a798] font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#d4a373]" />
                96/100 Computer Science Board Exam
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#d4a373]" />
                TechSphere Game & Web Dev Workshop
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#d4a373]" />
                Inter-School Chess Podium (3rd Place)
              </span>
            </div>

            {/* Primary Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-[#18120e] bg-[#c68b59] rounded-lg hover:bg-[#b87b48] transition-colors shadow-md cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#18120e]" />
                View Official Resume
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#showcase"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#e6d7cb] bg-[#241a14] border border-[#3d2c20] rounded-lg hover:bg-[#31231a] hover:text-[#f5ebe0] transition-colors cursor-pointer"
              >
                Explore Works & Experience
              </a>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#cbb9aa] hover:text-[#f5ebe0] transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right Column (5 cols): Picture-Free Candidate Profile Dossier */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Card surface */}
              <div className="relative overflow-hidden rounded-2xl border border-[#3d2c20] bg-[#1c1511]/90 p-6 sm:p-7 shadow-2xl backdrop-blur-sm space-y-5">
                {/* Header with Monogram & Identity */}
                <div className="flex items-center gap-4 pb-4 border-b border-[#38281e]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c68b59]/15 border border-[#c68b59]/30 text-[#d4a373] font-display text-xl font-bold tracking-tight shrink-0 shadow-inner">
                    PS
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-xl text-[#f5ebe0] tracking-tight">
                      Pranav Sharma
                    </h2>
                    <p className="text-xs text-[#d4a373] font-medium">
                      B.Tech CSE Core · VIT Vellore
                    </p>
                    <p className="text-[11px] text-[#8c7a6c] font-mono">
                      Class of 2029 · Vellore Institute of Technology
                    </p>
                  </div>
                </div>

                {/* Scholastic Summary Highlights */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#a89585] block">
                    Verified Scholastic Standing
                  </span>

                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-[#140f0c] border border-[#2e2119] space-y-0.5">
                      <span className="text-[10px] font-mono text-[#a89585] block">CBSE CLASS XII</span>
                      <p className="font-mono text-base font-bold text-[#f5ebe0]">91.2%</p>
                      <p className="text-[11px] text-[#d4a373]">96/100 Chemistry</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#140f0c] border border-[#2e2119] space-y-0.5">
                      <span className="text-[10px] font-mono text-[#a89585] block">CBSE CLASS X</span>
                      <p className="font-mono text-base font-bold text-[#f5ebe0]">92.6%</p>
                      <p className="text-[11px] text-[#e6ccb2]">96/100 Comp. Sci</p>
                    </div>
                  </div>
                </div>

                {/* Co-Curricular & Strategic Focus Badges */}
                <div className="space-y-2 pt-1 border-t border-[#38281e]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#a89585] block">
                    Focus & Demonstrated Merits
                  </span>

                  <div className="space-y-2 text-xs text-[#d7ccc8]">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-[#d4a373] shrink-0" />
                      <span>TechSphere: CS & Game Dev Workshop</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-[#e6ccb2] shrink-0" />
                      <span>3rd Place · Inter-School Chess Championship</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#c68b59] shrink-0" />
                      <span>Seth Anandram Jaipuria School Alumni</span>
                    </div>
                  </div>
                </div>

                {/* Sub-card metadata strip */}
                <div className="pt-4 border-t border-[#38281e] flex items-center justify-between text-xs text-[#cbb9aa]">
                  <div className="space-y-0.5">
                    <span className="text-[#8c7a6c] text-[10px] block uppercase font-mono">CONTACT</span>
                    <a
                      href="mailto:pranavvshrma@gmail.com"
                      className="text-[#d4a373] hover:underline font-mono text-[11px]"
                    >
                      pranavvshrma@gmail.com
                    </a>
                  </div>
                  <div className="text-right space-y-0.5">
                    <span className="text-[#8c7a6c] text-[10px] block uppercase font-mono">DEMOGRAPHICS</span>
                    <span className="text-[#e6d7cb] font-mono text-[11px]">18 YRS · Male · India</span>
                  </div>
                </div>
              </div>

              {/* Decorative accent card */}
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-3 rounded-xl border border-[#473528] bg-[#221813]/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#c68b59]/15 text-[#d4a373]">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#f5ebe0]">Competitive Strategist</p>
                  <p className="text-[11px] text-[#b8a798]">Chess Podium & Clusters Football</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Quantitative Rigor Row (Below Hero Split per Constitution) */}
        <div className="mt-16 pt-8 border-t border-[#38281e]/80">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            <div className="space-y-1">
              <p className="font-mono text-2xl sm:text-3xl font-bold text-[#f5ebe0] tabular-nums">92.6%</p>
              <p className="text-xs text-[#a89585]">CBSE Class X Board Aggregate</p>
            </div>
            <div className="space-y-1">
              <p className="font-mono text-2xl sm:text-3xl font-bold text-[#f5ebe0] tabular-nums">91.2%</p>
              <p className="text-xs text-[#a89585]">CBSE Class XII Board Aggregate</p>
            </div>
            <div className="space-y-1">
              <p className="font-mono text-2xl sm:text-3xl font-bold text-[#d4a373] tabular-nums">96/100</p>
              <p className="text-xs text-[#a89585]">Comp. Sci & Chemistry Scores</p>
            </div>
            <div className="space-y-1">
              <p className="font-mono text-2xl sm:text-3xl font-bold text-[#e6ccb2] tabular-nums">3rd Place</p>
              <p className="text-xs text-[#a89585]">Inter-School Chess Championship</p>
            </div>
            <div className="space-y-1 col-span-2 sm:col-span-1">
              <p className="font-mono text-2xl sm:text-3xl font-bold text-[#c68b59] tabular-nums">1-Week</p>
              <p className="text-xs text-[#a89585]">TechSphere CS & Game Workshop</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
