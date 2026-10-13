import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AcademicsSection: React.FC = () => {
  const [selectedEntry, setSelectedEntry] = useState<string>('vit');
  const activeItem = PORTFOLIO_DATA.education.find((e) => e.id === selectedEntry) || PORTFOLIO_DATA.education[0];

  return (
    <section id="academics" className="py-16 md:py-24 border-t border-[#38281e]/80 bg-[#16100d]/40">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#d4a373]">
            <span>Academic Background</span>
            <span aria-hidden="true">·</span>
            <span>Scholastic Rigor</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#f5ebe0]">
            Formal Education & High-Stakes Exam Record
          </h2>
          <p className="text-[#b8a798] text-sm sm:text-base leading-relaxed">
            Consistently recognized in high percentile tiers across national board examinations and core STEM coursework, currently enrolled in Computer Science & Engineering at VIT Vellore.
          </p>
        </div>

        {/* Standout Subject Marks Banner */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-[#3d2c20] bg-[#1e1612]/70 backdrop-blur-sm space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#a89585] font-medium">CBSE Class X Board Exam</span>
              <span className="font-mono text-xs text-[#d4a373] font-semibold">Computer Science</span>
            </div>
            <p className="font-mono text-2xl font-bold text-[#f5ebe0] tabular-nums">
              96<span className="text-[#8c7a6c] text-lg font-normal"> / 100</span>
            </p>
            <p className="text-xs text-[#b8a798]">Top percentile in algorithmic principles & computing syntax.</p>
          </div>

          <div className="p-4 rounded-xl border border-[#3d2c20] bg-[#1e1612]/70 backdrop-blur-sm space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#a89585] font-medium">CBSE Class XII Board Exam</span>
              <span className="font-mono text-xs text-[#e6ccb2] font-semibold">Chemistry</span>
            </div>
            <p className="font-mono text-2xl font-bold text-[#f5ebe0] tabular-nums">
              96<span className="text-[#8c7a6c] text-lg font-normal"> / 100</span>
            </p>
            <p className="text-xs text-[#b8a798]">Advanced analytical chemistry, organic mechanisms & stoichiometry.</p>
          </div>

          <div className="p-4 rounded-xl border border-[#3d2c20] bg-[#1e1612]/70 backdrop-blur-sm space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#a89585] font-medium">CBSE Class X Board Exam</span>
              <span className="font-mono text-xs text-[#c68b59] font-semibold">Math & Science</span>
            </div>
            <p className="font-mono text-2xl font-bold text-[#f5ebe0] tabular-nums">
              95<span className="text-[#8c7a6c] text-lg font-normal"> / 100</span>
            </p>
            <p className="text-xs text-[#b8a798]">Distinction in geometry, algebra, and physics fundamentals.</p>
          </div>
        </div>

        {/* Education Timeline & Interactive Detail Pane */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education List */}
          <div className="lg:col-span-5 space-y-3">
            {PORTFOLIO_DATA.education.map((item) => {
              const isSelected = item.id === selectedEntry;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedEntry(item.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#c68b59] bg-[#241a14]/90 shadow-lg ring-1 ring-[#c68b59]/40'
                      : 'border-[#38281e] bg-[#1a130f]/60 hover:border-[#4d3729] hover:bg-[#201712]/80'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className="font-display font-semibold text-[#f5ebe0] text-base">
                        {item.course}
                      </p>
                      <p className="text-xs text-[#b8a798]">
                        {item.institution}
                      </p>
                      {/* Clean unboxed metadata */}
                      <div className="flex items-center gap-2 pt-1 text-xs text-[#a89585] font-mono">
                        <span>{item.year}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#d4a373] font-bold">{item.score}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.status}</span>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 transition-transform shrink-0 ${
                        isSelected ? 'text-[#d4a373] translate-x-1' : 'text-[#6b584a]'
                      }`}
                    />
                  </div>
                </button>
              );
            })}

            {/* Official Academic Verification Note */}
            <div className="p-4 rounded-xl border border-[#38281e] bg-[#140f0c]/70 text-xs text-[#b8a798] space-y-1.5">
              <div className="flex items-center gap-2 text-[#e6d7cb] font-medium">
                <GraduationCap className="w-4 h-4 text-[#d4a373]" />
                Verified Institutional Records
              </div>
              <p>
                All percentages and subject mark distributions correspond directly to official Central Board of Secondary Education (CBSE) grade sheets and VIT Vellore enrollment.
              </p>
            </div>
          </div>

          {/* Right Column: Active Education Deep Dive Pane */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#3d2c20] bg-[#1c1511]/80 p-6 md:p-8 space-y-6 shadow-xl">
              {/* Header */}
              <div className="space-y-2 pb-6 border-b border-[#38281e]">
                <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono text-[#a89585]">
                  <span>{activeItem.year}</span>
                  <span className="text-[#d4a373] font-bold">{activeItem.scoreLabel}: {activeItem.score}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#f5ebe0]">
                  {activeItem.course}
                </h3>
                <p className="text-[#b8a798] text-sm">
                  {activeItem.institution}
                </p>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-[#a89585] font-semibold flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#d4a373]" />
                  Academic Focus & Context
                </h4>
                <p className="text-sm text-[#d7ccc8] leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-[#a89585] font-semibold flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-[#e6ccb2]" />
                  Curricular & Examination Highlights
                </h4>
                <ul className="space-y-2.5">
                  {activeItem.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d7ccc8]">
                      <CheckCircle className="w-4 h-4 text-[#d4a373] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Table Format */}
              <div className="pt-4 border-t border-[#38281e]">
                <span className="text-[11px] font-mono uppercase text-[#a89585] block mb-2">
                  Board Record Summary
                </span>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-[#38281e] text-[#a89585]">
                        <th className="py-2 pr-4 font-medium">Course</th>
                        <th className="py-2 px-4 font-medium">Year</th>
                        <th className="py-2 px-4 font-medium">Institute</th>
                        <th className="py-2 pl-4 font-medium text-right">Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#2e2119] text-[#d7ccc8]">
                      <tr>
                        <td className="py-2.5 pr-4 text-[#f5ebe0] font-medium">{activeItem.course.split('(')[0]}</td>
                        <td className="py-2.5 px-4">{activeItem.year.split('–')[0].trim()}</td>
                        <td className="py-2.5 px-4 truncate max-w-[180px]">{activeItem.institution.split(',')[0]}</td>
                        <td className="py-2.5 pl-4 text-right font-bold text-[#d4a373] tabular-nums">{activeItem.score}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
