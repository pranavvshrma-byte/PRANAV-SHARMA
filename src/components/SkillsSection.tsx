import React, { useState } from 'react';
import {
  Code2,
  Brain,
  Users,
  Clock,
  Compass,
  Lightbulb,
  Target,
  Sparkles,
  Flame,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Map skills to relevant professional icons
const SKILL_ICONS: Record<string, React.ElementType> = {
  'Technical Aptitude': Code2,
  'Web & Game Development': Sparkles,
  'Problem Solving': Target,
  'Creativity': Lightbulb,
  'Strategic Thinking': Brain,
  'Analytical Decision-Making': Compass,
  'Teamwork & Coordination': Users,
  'Adaptability & Resilience': Flame,
  'Self Motivation & Continuous Learning': Sparkles,
  'Time Management': Clock,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'Technical' | 'Strategic & Analytical' | 'Interpersonal & Leadership'
  >('all');

  const filteredSkills = PORTFOLIO_DATA.skills.filter((sk) => {
    if (selectedCategory === 'all') return true;
    return sk.category === selectedCategory;
  });

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-[#38281e]/80">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#d4a373]">
              <span>Competency Matrix</span>
              <span aria-hidden="true">·</span>
              <span>Core Strengths</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#f5ebe0]">
              Key Skills & Core Competencies
            </h2>
            <p className="text-[#b8a798] text-sm sm:text-base leading-relaxed">
              Foundational abilities across technical computing, analytical reasoning, athletic discipline, and collaborative leadership.
            </p>
          </div>

          {/* Category filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#1a130f] border border-[#38281e] rounded-xl shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#2b1f17] text-[#f5ebe0] shadow-sm border border-[#473528]'
                  : 'text-[#a89585] hover:text-[#f5ebe0]'
              }`}
            >
              All Skills ({PORTFOLIO_DATA.skills.length})
            </button>
            <button
              onClick={() => setSelectedCategory('Technical')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'Technical'
                  ? 'bg-[#2b1f17] text-[#d4a373] shadow-sm border border-[#473528]'
                  : 'text-[#a89585] hover:text-[#f5ebe0]'
              }`}
            >
              Technical
            </button>
            <button
              onClick={() => setSelectedCategory('Strategic & Analytical')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'Strategic & Analytical'
                  ? 'bg-[#2b1f17] text-[#e6ccb2] shadow-sm border border-[#473528]'
                  : 'text-[#a89585] hover:text-[#f5ebe0]'
              }`}
            >
              Strategic & Analytical
            </button>
            <button
              onClick={() => setSelectedCategory('Interpersonal & Leadership')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'Interpersonal & Leadership'
                  ? 'bg-[#2b1f17] text-[#c68b59] shadow-sm border border-[#473528]'
                  : 'text-[#a89585] hover:text-[#f5ebe0]'
              }`}
            >
              Team & Leadership
            </button>
          </div>
        </div>

        {/* Clean, Full-Width Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const IconComponent = SKILL_ICONS[skill.name] || Sparkles;

            // Warm coffee category accent
            const accentColor =
              skill.category === 'Technical'
                ? 'text-[#d4a373] bg-[#c68b59]/15'
                : skill.category === 'Strategic & Analytical'
                ? 'text-[#e6ccb2] bg-[#e6ccb2]/15'
                : 'text-[#c68b59] bg-[#8b5e3c]/20';

            return (
              <div
                key={skill.name}
                className="group flex flex-col justify-between p-5 rounded-2xl border border-[#3d2c20] bg-[#1c1511]/70 hover:border-[#523c2d] hover:bg-[#221a14]/90 transition-all shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentColor}`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>

                    {/* Clean unboxed category label */}
                    <span className="text-[11px] font-mono text-[#a89585]">
                      {skill.category.split('&')[0].trim()}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-[#f5ebe0] text-base group-hover:text-[#d4a373] transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#d7ccc8] leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
