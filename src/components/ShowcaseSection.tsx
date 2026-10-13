import React, { useState } from 'react';
import { ArrowUpRight, Trophy, Code2, Users, X, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, ExperienceItem } from '../data/portfolioData';

export const ShowcaseSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'workshop' | 'competition' | 'sports'>('all');
  const [selectedItem, setSelectedItem] = useState<ExperienceItem | null>(null);

  const filteredItems = PORTFOLIO_DATA.experiences.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="showcase" className="py-16 md:py-24 border-t border-[#38281e]/80">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#d4a373]">
              <span>Selected Works & Experience</span>
              <span aria-hidden="true">·</span>
              <span>Workshops & Competitions</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#f5ebe0]">
              Practical Immersion, Strategy & Athletics
            </h2>
            <p className="text-[#b8a798] text-sm sm:text-base leading-relaxed">
              Bridging computing foundations with disciplined athletic execution and competitive strategic foresight.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#1a130f] border border-[#38281e] rounded-xl shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#2b1f17] text-[#f5ebe0] shadow-sm border border-[#473528]'
                  : 'text-[#a89585] hover:text-[#f5ebe0]'
              }`}
            >
              All Records
            </button>
            <button
              onClick={() => setActiveFilter('workshop')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'workshop'
                  ? 'bg-[#2b1f17] text-[#d4a373] shadow-sm border border-[#473528]'
                  : 'text-[#a89585] hover:text-[#f5ebe0]'
              }`}
            >
              TechSphere Workshop
            </button>
            <button
              onClick={() => setActiveFilter('competition')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'competition'
                  ? 'bg-[#2b1f17] text-[#e6ccb2] shadow-sm border border-[#473528]'
                  : 'text-[#a89585] hover:text-[#f5ebe0]'
              }`}
            >
              Chess Tournament
            </button>
            <button
              onClick={() => setActiveFilter('sports')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'sports'
                  ? 'bg-[#2b1f17] text-[#c68b59] shadow-sm border border-[#473528]'
                  : 'text-[#a89585] hover:text-[#f5ebe0]'
              }`}
            >
              Football Clusters
            </button>
          </div>
        </div>

        {/* Clean Editorial Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isWorkshop = item.category === 'workshop';
            const isCompetition = item.category === 'competition';
            const iconBg = isWorkshop
              ? 'bg-[#c68b59]/15 text-[#d4a373]'
              : isCompetition
              ? 'bg-[#e6ccb2]/15 text-[#e6ccb2]'
              : 'bg-[#8b5e3c]/20 text-[#c68b59]';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group flex flex-col justify-between rounded-2xl border border-[#3d2c20] bg-[#1c1511]/70 p-6 md:p-7 hover:border-[#523c2d] hover:bg-[#221a14]/90 transition-all cursor-pointer shadow-xl space-y-6"
              >
                <div className="space-y-4">
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBg}`}>
                        {item.category === 'workshop' && <Code2 className="w-5 h-5" />}
                        {item.category === 'competition' && <Trophy className="w-5 h-5" />}
                        {item.category === 'sports' && <Users className="w-5 h-5" />}
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#e6d7cb]">
                        {item.role}
                      </span>
                    </div>

                    <div className="p-2 rounded-lg bg-[#261c16] text-[#b8a798] group-hover:bg-[#c68b59] group-hover:text-[#18120e] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-[#a89585] font-mono">
                    <span>{item.organization}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.period}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-[#f5ebe0] group-hover:text-[#d4a373] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#d7ccc8] leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Scope Highlights */}
                  <div className="space-y-2 pt-2 border-t border-[#38281e]">
                    <span className="text-[11px] font-mono text-[#a89585] uppercase tracking-wider block">
                      Key Highlights
                    </span>
                    <ul className="space-y-2">
                      {item.points.slice(0, 2).map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-[#d7ccc8]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#d4a373] shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer with skills applied */}
                <div className="pt-4 border-t border-[#38281e] flex flex-wrap items-center gap-2 text-xs text-[#b8a798]">
                  <span className="text-[#8c7a6c] font-mono text-[11px]">Core:</span>
                  {item.skillsApplied.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[#e6d7cb]">
                      {skill}
                      {sIdx < item.skillsApplied.length - 1 && <span className="ml-2 text-[#5a4638]">/</span>}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Detail View */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative w-full max-w-2xl rounded-2xl border border-[#473528] bg-[#1a130f] p-6 md:p-8 shadow-2xl text-[#f5ebe0] max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-[#b8a798] hover:text-[#f5ebe0] hover:bg-[#261c16] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      selectedItem.category === 'workshop'
                        ? 'bg-[#c68b59]/20 text-[#d4a373]'
                        : selectedItem.category === 'competition'
                        ? 'bg-[#e6ccb2]/20 text-[#e6ccb2]'
                        : 'bg-[#8b5e3c]/25 text-[#c68b59]'
                    }`}
                  >
                    {selectedItem.category === 'workshop' && <Code2 className="w-6 h-6" />}
                    {selectedItem.category === 'competition' && <Trophy className="w-6 h-6" />}
                    {selectedItem.category === 'sports' && <Users className="w-6 h-6" />}
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#e6d7cb]">
                      {selectedItem.role}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#a89585]">
                      <span>{selectedItem.organization}</span>
                      <span aria-hidden="true">·</span>
                      <span>{selectedItem.period}</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#f5ebe0]">
                  {selectedItem.title}
                </h3>

                <p className="text-sm text-[#d7ccc8] leading-relaxed">
                  {selectedItem.summary}
                </p>

                {/* Bullet Points from Resume */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#a89585]">
                    Detailed Contributions & Scope
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedItem.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d7ccc8]">
                        <CheckCircle2 className="w-4 h-4 text-[#d4a373] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Takeaway */}
                <div className="p-4 rounded-xl bg-[#140f0c] border border-[#38281e] space-y-1">
                  <span className="text-[11px] font-mono text-[#d4a373] uppercase tracking-wider block">
                    Strategic Engineering Takeaway
                  </span>
                  <p className="text-xs sm:text-sm text-[#d7ccc8] italic">
                    "{selectedItem.featuredTakeaway}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
