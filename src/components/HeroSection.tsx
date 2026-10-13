import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, FileText, Mail, Award, CheckCircle2, Camera, RotateCcw } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenContact }) => {
  const { profile } = PORTFOLIO_DATA;
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [currentAvatar, setCurrentAvatar] = useState<string>(() => {
    return localStorage.getItem('pranav_custom_avatar') || profile.avatar;
  });

  const [hasCustomAvatar, setHasCustomAvatar] = useState<boolean>(() => {
    return Boolean(localStorage.getItem('pranav_custom_avatar'));
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCurrentAvatar(result);
          setHasCustomAvatar(true);
          try {
            localStorage.setItem('pranav_custom_avatar', result);
          } catch {
            // In case of quota limit
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetAvatar = () => {
    localStorage.removeItem('pranav_custom_avatar');
    setCurrentAvatar(profile.avatar);
    setHasCustomAvatar(false);
  };

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
        {/* Split Hero: Left Column Typography, Right Column Visual */}
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

          {/* Right Column (5 cols): Editorial Visual Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Hidden File Input for Exact Photo Upload */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                aria-label="Upload exact profile image file"
              />

              {/* Card surface */}
              <div className="relative overflow-hidden rounded-2xl border border-[#3d2c20] bg-[#1c1511]/80 p-3 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#140f0c]">
                  {/* Action button overlay to upload exact file */}
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
                    {hasCustomAvatar && (
                      <button
                        onClick={handleResetAvatar}
                        className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-[#140f0c]/85 hover:bg-[#2b1f17] text-[#cbb9aa] hover:text-white text-[11px] font-medium border border-[#3d2c20] transition-colors shadow-md cursor-pointer backdrop-blur-md"
                        title="Reset to default image"
                      >
                        <RotateCcw className="w-3 h-3" />
                      </button>
                    )}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#140f0c]/90 hover:bg-[#c68b59] hover:text-[#18120e] text-[#f5ebe0] text-[11px] font-bold border border-[#473528] transition-all shadow-lg cursor-pointer backdrop-blur-md"
                      title="Upload your exact original photo (e.g. BLAAHHH.jpeg) from device"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>{hasCustomAvatar ? 'Change Photo' : 'Upload Exact Photo'}</span>
                    </button>
                  </div>

                  <img
                    src={currentAvatar}
                    alt="Pranav Sharma - Computer Science Student"
                    className="h-full w-full object-cover object-[center_25%] transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />

                  {/* Subtle warm scrim for bottom text clarity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140f0c]/90 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 text-[#f5ebe0]">
                    <p className="font-display font-semibold text-base">Pranav Sharma</p>
                    <p className="text-xs text-[#d7ccc8]">
                      B.Tech CSE Core · Vellore Institute of Technology
                    </p>
                  </div>
                </div>

                {/* Sub-card metadata strip */}
                <div className="mt-3 p-3 rounded-lg bg-[#140f0c]/80 border border-[#38281e] flex items-center justify-between text-xs text-[#cbb9aa]">
                  <div className="space-y-0.5">
                    <span className="text-[#8c7a6c] text-[11px] block uppercase font-mono">DIRECT CONTACT</span>
                    <a
                      href="mailto:pranavvshrma@gmail.com"
                      className="text-[#d4a373] hover:underline font-mono text-[11px]"
                    >
                      pranavvshrma@gmail.com
                    </a>
                  </div>
                  <div className="text-right space-y-0.5">
                    <span className="text-[#8c7a6c] text-[11px] block uppercase font-mono">AGE / LOCATION</span>
                    <span className="text-[#e6d7cb] font-mono text-[11px]">18 YRS · India</span>
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
