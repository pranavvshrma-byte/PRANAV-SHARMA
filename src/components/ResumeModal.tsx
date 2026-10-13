import React, { useState } from 'react';
import {
  X,
  Printer,
  Copy,
  Check,
  Download,
  Mail,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Award,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ResumeFormat = 'modern' | 'classic' | 'minimal';

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [format, setFormat] = useState<ResumeFormat>('modern');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `PRANAV SHARMA
Computer Science & Engineering Student (First Year)
VIT Vellore | Vellore, India
Email: ${PORTFOLIO_DATA.profile.email} | Age: 18 yrs

------------------------------------------------------------
PROFILE SUMMARY
------------------------------------------------------------
${PORTFOLIO_DATA.profile.summary}

------------------------------------------------------------
EDUCATION
------------------------------------------------------------
• B.Tech in Computer Science and Engineering (CSE Core)
  VIT Vellore (Vellore Institute of Technology) | 2026 – Present
  Status: First Year (Ongoing)
  - Core curriculum in data structures, algorithms, and computing systems
  - Specializing in interactive web and game development architectures

• CBSE Class XII (Senior Secondary)
  Seth Anandram Jaipuria School, Ghaziabad | Passing Year: 2026
  Aggregate Score: 91.2%
  - Achieved a score of 96/100 in Chemistry in CBSE Class XII Board Examination
  - Advanced coursework in Physics, Chemistry, Mathematics, and Computer Science

• CBSE Class X (Secondary)
  Seth Anandram Jaipuria School, Ghaziabad | Passing Year: 2024
  Aggregate Score: 92.6%
  - Achieved a score of 96/100 in Computer Science Board Examination
  - Achieved a score of 95/100 in Mathematics and Science Board Examination

------------------------------------------------------------
WORK EXPERIENCE & CO-CURRICULAR
------------------------------------------------------------
• TechSphere: Computer Science & Game Development Workshop
  One-Week Intensive Workshop | Participant & Project Builder
  - Participated in an intensive week-long workshop focused on computer science, web development, and game development.
  - Explored fundamental programming concepts, object-oriented logic, and algorithmic efficiency.
  - Studied the principles of interactive website mechanics and responsive browser rendering.
  - Gained hands-on exposure to 2D game loops, state machines, sprite physics, and collision logic.
  - Gained exposure to problem-solving, creative thinking, and emerging technologies.

• Football Player – Clusters Tournament
  Seth Anandram Jaipuria School | Class XII | Team Representative
  - Represented the school in the prestigious CLUSTERS football tournament, demonstrating teamwork, discipline, and coordination.
  - Collaborated with teammates to execute dynamic pitch strategies and perform effectively in a competitive environment.

• Third Place – Inter-School Chess Competition
  Competitive Chess Player | Podium Finish
  - Secured third place in an inter-school chess competition, showcasing strategic thinking, concentration, and analytical decision-making.
  - Applied structured multi-turn planning and threat calculation under strict tournament time controls.

------------------------------------------------------------
KEY SKILLS & STRENGTHS
------------------------------------------------------------
• Technical: Technical Aptitude, Problem Solving, Web Development Foundations, Game Design Loops, Programming Logic
• Cognitive: Strategic Thinking, Analytical Decision-Making, Creativity
• Collaborative & Growth: Teamwork, Adaptability, Self Motivation, Time Management
`;

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadMarkdown = () => {
    const mdContent = `# PRANAV SHARMA
**Computer Science & Engineering (B.Tech CSE Core)**  
*VIT Vellore* · \`${PORTFOLIO_DATA.profile.email}\` · Age 18

---

## Profile Summary
${PORTFOLIO_DATA.profile.summary}

---

## Education

### B.Tech in Computer Science and Engineering (CSE Core)
**VIT Vellore** | 2026 – Present  
- Current Status: First Year (Ongoing)
- Focus: Algorithms, Web Architecture, Game Engines

### CBSE Class XII
**Seth Anandram Jaipuria School, Ghaziabad** | 2026  
- **Aggregate: 91.2%**
- **Chemistry: 96/100** in CBSE Board Examination

### CBSE Class X
**Seth Anandram Jaipuria School, Ghaziabad** | 2024  
- **Aggregate: 92.6%**
- **Computer Science: 96/100** in CBSE Board Examination
- **Mathematics & Science: 95/100** in CBSE Board Examination

---

## Work Experience & Co-Curricular

### TechSphere: Computer Science & Game Development Workshop
*One-Week Intensive Workshop*
- Explored fundamental programming concepts and principles of interactive website and game design.
- Implemented 2D game loops, state machines, and responsive browser interfaces.
- Gained exposure to creative problem-solving and emerging technologies.

### Football Player – Clusters Tournament
*Seth Anandram Jaipuria School | Class XII*
- Represented school in CLUSTERS football tournament with teamwork, discipline, and tactical execution.

### Third Place – Inter-School Chess Competition
*Inter-School Tournament Podium*
- Secured 3rd place demonstrating analytical foresight, multi-turn calculation, and decision-making under pressure.

---

## Key Skills
- **Technical**: Technical Aptitude, Problem Solving, Web & Game Development Foundations, Creativity
- **Interpersonal & Strategy**: Teamwork, Adaptability, Self Motivation, Strategic Thinking, Time Management
`;

    const blob = new Blob([mdContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Pranav_Sharma_Resume.md';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-2 sm:p-4 md:p-6 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-[#473528] bg-[#1a130f] shadow-2xl text-[#f5ebe0] my-4 sm:my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden in Print) */}
        <div className="no-print flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#38281e] bg-[#140f0c] px-5 py-3.5">
          {/* Left: Title & Format Picker */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display font-semibold text-[#f5ebe0] text-sm">
              Offline Resume
            </span>

            {/* Format Switcher */}
            <div className="flex items-center gap-1 p-1 bg-[#1c1511] border border-[#38281e] rounded-lg text-xs font-medium">
              <button
                onClick={() => setFormat('modern')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  format === 'modern'
                    ? 'bg-[#c68b59] text-[#140f0c] font-bold shadow-sm'
                    : 'text-[#a89585] hover:text-[#f5ebe0]'
                }`}
              >
                Modern Split
              </button>
              <button
                onClick={() => setFormat('classic')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  format === 'classic'
                    ? 'bg-[#c68b59] text-[#140f0c] font-bold shadow-sm'
                    : 'text-[#a89585] hover:text-[#f5ebe0]'
                }`}
              >
                Classic Academic
              </button>
              <button
                onClick={() => setFormat('minimal')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  format === 'minimal'
                    ? 'bg-[#c68b59] text-[#140f0c] font-bold shadow-sm'
                    : 'text-[#a89585] hover:text-[#f5ebe0]'
                }`}
              >
                Executive Single
              </button>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#e6d7cb] bg-[#241a14] border border-[#3d2c20] rounded-lg hover:text-[#f5ebe0] hover:bg-[#31231a] transition-colors cursor-pointer"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#d4a373]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#e6d7cb] bg-[#241a14] border border-[#3d2c20] rounded-lg hover:text-[#f5ebe0] hover:bg-[#31231a] transition-colors cursor-pointer"
              title="Download as Markdown"
            >
              <Download className="w-3.5 h-3.5" />
              <span>.MD</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-[#140f0c] bg-[#c68b59] rounded-lg hover:bg-[#b87b48] transition-colors cursor-pointer shadow-sm"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Viewport */}
        <div className="print-area p-6 sm:p-10 md:p-12 bg-white text-slate-900 font-sans max-h-[82vh] overflow-y-auto">
          {/* ============================================================== */}
          {/* FORMAT 1: MODERN TWO-COLUMN TECH RESUME (DEFAULT)              */}
          {/* ============================================================== */}
          {format === 'modern' && (
            <div className="space-y-6 text-slate-800">
              {/* Modern Top Header Banner */}
              <div className="border-b-2 border-slate-900 pb-5">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 uppercase">
                      PRANAV SHARMA
                    </h1>
                    <p className="text-sm font-semibold text-blue-800 tracking-wide mt-0.5">
                      First-Year Computer Science & Engineering (CSE Core) · VIT Vellore
                    </p>
                  </div>

                  <div className="text-xs text-slate-600 sm:text-right space-y-0.5 font-medium">
                    <p className="flex items-center sm:justify-end gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-500" />
                      <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="text-blue-700 hover:underline">
                        {PORTFOLIO_DATA.profile.email}
                      </a>
                    </p>
                    <p className="flex items-center sm:justify-end gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>Vellore / Ghaziabad, India</span>
                    </p>
                    <p className="text-slate-500 font-mono text-[11px]">
                      Male · 18 Years · Indian
                    </p>
                  </div>
                </div>
              </div>

              {/* Two-Column Grid: Left Sidebar (38%) + Right Main (62%) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Left Sidebar (5 cols = ~40%) */}
                <div className="md:col-span-5 space-y-6 border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-6">
                  {/* EDUCATION BLOCK */}
                  <div className="space-y-3">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
                      EDUCATION
                    </h2>

                    {/* VIT Vellore */}
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-950 leading-snug">
                        B.Tech in Computer Science & Engineering (Core)
                      </p>
                      <p className="text-[11px] text-blue-800 font-medium">
                        VIT Vellore (Vellore Institute of Technology)
                      </p>
                      <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                        <span>2026 – Present</span>
                        <span className="font-semibold text-slate-900">First Year (Current)</span>
                      </div>
                    </div>

                    {/* Class XII */}
                    <div className="space-y-1 pt-2 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-bold text-slate-950">CBSE Class XII</p>
                        <span className="text-xs font-bold text-blue-800 font-mono">91.2%</span>
                      </div>
                      <p className="text-[11px] text-slate-600">
                        Seth Anandram Jaipuria School, Ghaziabad
                      </p>
                      <p className="text-[11px] font-mono text-slate-500">Passing Year: 2026</p>
                      <p className="text-[11px] text-emerald-800 font-medium bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 inline-block">
                        96/100 in Chemistry Board Exam
                      </p>
                    </div>

                    {/* Class X */}
                    <div className="space-y-1 pt-2 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-bold text-slate-950">CBSE Class X</p>
                        <span className="text-xs font-bold text-blue-800 font-mono">92.6%</span>
                      </div>
                      <p className="text-[11px] text-slate-600">
                        Seth Anandram Jaipuria School, Ghaziabad
                      </p>
                      <p className="text-[11px] font-mono text-slate-500">Passing Year: 2024</p>
                      <div className="space-y-0.5 pt-0.5">
                        <p className="text-[11px] text-blue-900 font-medium bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200 inline-block">
                          96/100 in Computer Science
                        </p>
                        <p className="text-[11px] text-slate-700">
                          95/100 in Mathematics & Science
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* KEY SKILLS MATRIX */}
                  <div className="space-y-3 pt-2">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                      KEY SKILLS & STRENGTHS
                    </h2>

                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-[11px] font-bold text-slate-700 block uppercase tracking-wider">
                          Technical Aptitude
                        </span>
                        <p className="text-slate-600 text-[11px] leading-relaxed">
                          Web Development Fundamentals, 2D Game Loops, Programming Logic, Algorithmic Thinking
                        </p>
                      </div>

                      <div>
                        <span className="text-[11px] font-bold text-slate-700 block uppercase tracking-wider">
                          Analytical & Strategy
                        </span>
                        <p className="text-slate-600 text-[11px] leading-relaxed">
                          Problem Solving, Strategic Thinking, Analytical Decision-Making, Creativity
                        </p>
                      </div>

                      <div>
                        <span className="text-[11px] font-bold text-slate-700 block uppercase tracking-wider">
                          Leadership & Collaboration
                        </span>
                        <p className="text-slate-600 text-[11px] leading-relaxed">
                          Teamwork, Adaptability, Self Motivation, Time Management, Pressure Execution
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* AREAS OF PASSION */}
                  <div className="space-y-1.5 pt-2">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                      CORE INTERESTS
                    </h2>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                      <li>Web Application Development</li>
                      <li>Game Engine Design & 2D Physics</li>
                      <li>Competitive Chess Strategy</li>
                      <li>Emerging Technologies & AI</li>
                    </ul>
                  </div>
                </div>

                {/* Right Column: Work Experience & Summary (7 cols = ~60%) */}
                <div className="md:col-span-7 space-y-5">
                  {/* SUMMARY */}
                  <div className="space-y-1.5">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                      PROFILE SUMMARY
                    </h2>
                    <p className="text-xs text-slate-700 leading-relaxed text-justify">
                      {PORTFOLIO_DATA.profile.summary}
                    </p>
                  </div>

                  {/* WORK EXPERIENCE & WORKSHOPS */}
                  <div className="space-y-4">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-blue-700" />
                      PRACTICAL WORKSHOPS & IMMERSION
                    </h2>

                    {/* TechSphere */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-baseline flex-wrap gap-1">
                        <h3 className="text-xs font-bold text-slate-950">
                          TechSphere: Computer Science & Game Development Workshop
                        </h3>
                        <span className="text-[11px] font-mono text-slate-500">1-Week Intensive</span>
                      </div>
                      <p className="text-[11px] text-blue-800 font-medium">
                        Participant & Interactive Prototype Builder
                      </p>
                      <ul className="list-disc list-outside text-xs text-slate-700 space-y-1 pl-4 leading-relaxed">
                        <li>
                          Participated in an intensive week-long workshop focused on computer science, web development, and game development.
                        </li>
                        <li>
                          Explored fundamental programming concepts and the principles of interactive website and game design.
                        </li>
                        <li>
                          Gained exposure to problem-solving, creative thinking, state machines, and emerging technologies.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* ATHLETICS & COMPETITIONS */}
                  <div className="space-y-4 pt-2">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-700" />
                      COMPETITIVE ATHLETICS & CHESS
                    </h2>

                    {/* Clusters Football */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-baseline flex-wrap gap-1">
                        <h3 className="text-xs font-bold text-slate-950">
                          Football Player – Clusters Tournament
                        </h3>
                        <span className="text-[11px] font-mono text-slate-500">Class XII</span>
                      </div>
                      <p className="text-[11px] text-slate-600 italic">
                        Seth Anandram Jaipuria School Squad Representative
                      </p>
                      <ul className="list-disc list-outside text-xs text-slate-700 space-y-1 pl-4 leading-relaxed">
                        <li>
                          Represented the school in the competitive CLUSTERS football tournament, demonstrating teamwork, discipline, and coordination.
                        </li>
                        <li>
                          Collaborated with teammates to execute strategic formations and perform effectively in a high-pressure competitive environment.
                        </li>
                      </ul>
                    </div>

                    {/* Inter-School Chess */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between items-baseline flex-wrap gap-1">
                        <h3 className="text-xs font-bold text-slate-950">
                          Third Place – Inter-School Chess Competition
                        </h3>
                        <span className="text-[11px] font-mono text-emerald-800 font-semibold bg-emerald-50 px-1 rounded">
                          Podium Finish
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 italic">
                        Inter-School Tournament Championship
                      </p>
                      <ul className="list-disc list-outside text-xs text-slate-700 space-y-1 pl-4 leading-relaxed">
                        <li>
                          Secured third place in an inter-school chess competition, showcasing strategic thinking, concentration, and analytical decision-making.
                        </li>
                        <li>
                          Evaluated complex branching moves and calculated tactics under strict tournament time controls.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Pranav Sharma · B.Tech CSE Core (VIT Vellore)</span>
                <span>pranavvshrma@gmail.com</span>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* FORMAT 2: CLASSIC ACADEMIC (HARVARD / IVY LEAGUE STYLE)       */}
          {/* ============================================================== */}
          {format === 'classic' && (
            <div className="space-y-6 text-slate-900 max-w-3xl mx-auto">
              {/* Centered Traditional Header */}
              <div className="text-center pb-4 border-b-2 border-slate-900 space-y-1">
                <h1 className="font-display text-3xl font-bold tracking-wider uppercase text-slate-950">
                  PRANAV SHARMA
                </h1>
                <p className="text-xs text-slate-700 font-medium">
                  pranavvshrma@gmail.com · Male, 18 Years · Vellore / Ghaziabad, India
                </p>
                <p className="text-xs text-slate-600 italic">
                  Candidate for B.Tech in Computer Science and Engineering (CSE Core), VIT Vellore
                </p>
              </div>

              {/* SECTION: EDUCATION */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-800 pb-0.5">
                  EDUCATION
                </h2>

                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <strong className="text-slate-950">Vellore Institute of Technology (VIT Vellore)</strong>
                      <span className="font-mono text-slate-600">2026 – Present</span>
                    </div>
                    <div className="flex justify-between items-baseline italic text-slate-700">
                      <span>Bachelor of Technology in Computer Science and Engineering (CSE Core)</span>
                      <span>First Year</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <strong className="text-slate-950">Seth Anandram Jaipuria School, Ghaziabad</strong>
                      <span className="font-mono text-slate-600">2026</span>
                    </div>
                    <div className="flex justify-between items-baseline italic text-slate-700">
                      <span>CBSE Class XII (Senior Secondary Examination)</span>
                      <span className="font-bold not-italic text-slate-900">91.2%</span>
                    </div>
                    <p className="text-[11px] text-slate-700 pl-3 pt-0.5">
                      • Achieved 96/100 in Chemistry in CBSE Class XII Board Examination.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <strong className="text-slate-950">Seth Anandram Jaipuria School, Ghaziabad</strong>
                      <span className="font-mono text-slate-600">2024</span>
                    </div>
                    <div className="flex justify-between items-baseline italic text-slate-700">
                      <span>CBSE Class X (Secondary School Examination)</span>
                      <span className="font-bold not-italic text-slate-900">92.6%</span>
                    </div>
                    <p className="text-[11px] text-slate-700 pl-3 pt-0.5">
                      • Achieved 96/100 in Computer Science and 95/100 in Mathematics and Science.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION: SUMMARY */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-800 pb-0.5">
                  STATEMENT OF PURPOSE & OBJECTIVE
                </h2>
                <p className="text-xs text-slate-800 leading-relaxed text-justify">
                  {PORTFOLIO_DATA.profile.summary}
                </p>
              </div>

              {/* SECTION: WORKSHOPS & IMMERSION */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-800 pb-0.5">
                  TECHNICAL IMMERSION & WORKSHOPS
                </h2>

                <div className="text-xs space-y-1">
                  <div className="flex justify-between items-baseline">
                    <strong className="text-slate-950">TechSphere: Computer Science & Game Development Workshop</strong>
                    <span className="font-mono text-slate-600">One-Week Program</span>
                  </div>
                  <p className="italic text-slate-700">Participant & Project Implementer</p>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-slate-800 pt-1 leading-relaxed">
                    <li>Participated in a week-long workshop focused on computer science, web development, and game development.</li>
                    <li>Explored fundamental programming concepts and the principles of interactive website and game design.</li>
                    <li>Gained exposure to problem-solving, creative thinking, and emerging technologies.</li>
                  </ul>
                </div>
              </div>

              {/* SECTION: ATHLETICS & CHESS */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-800 pb-0.5">
                  EXTRACURRICULAR LEADERSHIP & COMPETITIVE MERIT
                </h2>

                <div className="text-xs space-y-2">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <strong className="text-slate-950">Football Player – Clusters Tournament</strong>
                      <span className="font-mono text-slate-600">Class XII</span>
                    </div>
                    <p className="italic text-slate-700">Seth Anandram Jaipuria School Squad</p>
                    <p className="text-slate-800 pt-0.5">
                      Represented school in the CLUSTERS football tournament, demonstrating teamwork, discipline, coordination, and tactical performance under competitive pressure.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <strong className="text-slate-950">Third Place – Inter-School Chess Competition</strong>
                      <span className="font-mono text-slate-600">Podium Finish</span>
                    </div>
                    <p className="italic text-slate-700">Inter-School Cognitive Championship</p>
                    <p className="text-slate-800 pt-0.5">
                      Secured third place in an inter-school chess competition, showcasing strategic thinking, concentration, and analytical decision-making.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION: KEY SKILLS */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-800 pb-0.5">
                  SKILLS & COMPETENCIES
                </h2>
                <div className="grid grid-cols-2 gap-4 text-xs text-slate-800">
                  <div>
                    <p><strong>Technical:</strong> Technical Aptitude, Problem Solving, Web Development, Game Design</p>
                    <p className="pt-1"><strong>Cognitive:</strong> Strategic Thinking, Creativity, Analytical Calculation</p>
                  </div>
                  <div>
                    <p><strong>Interpersonal:</strong> Teamwork, Adaptability, Self Motivation</p>
                    <p className="pt-1"><strong>Execution:</strong> Time Management, High-Pressure Composure</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* FORMAT 3: EXECUTIVE SINGLE-COLUMN MINIMALIST                   */}
          {/* ============================================================== */}
          {format === 'minimal' && (
            <div className="space-y-6 text-slate-800">
              {/* Minimalist Top Block */}
              <div className="p-5 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950">
                    Pranav Sharma
                  </h1>
                  <p className="text-xs font-semibold text-blue-800">
                    B.Tech CSE Core · VIT Vellore · Class of 2029
                  </p>
                </div>
                <div className="text-xs text-slate-600 font-mono sm:text-right space-y-0.5">
                  <p>{PORTFOLIO_DATA.profile.email}</p>
                  <p>18 Yrs · Male · India</p>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-semibold block">
                  Overview
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {PORTFOLIO_DATA.profile.summary}
                </p>
              </div>

              {/* Education Cards */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-semibold block">
                  Education
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                    <span className="text-[10px] font-mono text-blue-700 font-bold block">CURRENT</span>
                    <p className="text-xs font-bold text-slate-950">B.Tech CSE Core</p>
                    <p className="text-[11px] text-slate-600">VIT Vellore</p>
                    <p className="text-[11px] text-slate-500 font-mono">2026 – Present</p>
                  </div>

                  <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                    <span className="text-[10px] font-mono text-emerald-700 font-bold block">91.2% AGGREGATE</span>
                    <p className="text-xs font-bold text-slate-950">CBSE Class XII</p>
                    <p className="text-[11px] text-slate-600">Seth Anandram Jaipuria</p>
                    <p className="text-[11px] text-emerald-800 font-semibold">96/100 in Chemistry</p>
                  </div>

                  <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                    <span className="text-[10px] font-mono text-blue-700 font-bold block">92.6% AGGREGATE</span>
                    <p className="text-xs font-bold text-slate-950">CBSE Class X</p>
                    <p className="text-[11px] text-slate-600">Seth Anandram Jaipuria</p>
                    <p className="text-[11px] text-blue-800 font-semibold">96/100 in Comp. Sci</p>
                  </div>
                </div>
              </div>

              {/* Experience & Workshop */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-semibold block">
                  Work Experience & Extracurriculars
                </span>

                <div className="divide-y divide-slate-200">
                  <div className="py-2.5 space-y-1">
                    <div className="flex justify-between items-baseline text-xs">
                      <strong className="text-slate-950">TechSphere: CS & Game Development Workshop</strong>
                      <span className="text-slate-500 font-mono text-[11px]">One-Week</span>
                    </div>
                    <p className="text-xs text-slate-700">
                      Explored fundamental programming concepts, interactive website architecture, and game design principles with hands-on exposure to problem-solving and emerging technologies.
                    </p>
                  </div>

                  <div className="py-2.5 space-y-1">
                    <div className="flex justify-between items-baseline text-xs">
                      <strong className="text-slate-950">Football Player – Clusters Tournament</strong>
                      <span className="text-slate-500 font-mono text-[11px]">Class XII</span>
                    </div>
                    <p className="text-xs text-slate-700">
                      Represented school in the CLUSTERS football tournament, demonstrating teamwork, tactical discipline, and competitive execution.
                    </p>
                  </div>

                  <div className="py-2.5 space-y-1">
                    <div className="flex justify-between items-baseline text-xs">
                      <strong className="text-slate-950">Third Place – Inter-School Chess Competition</strong>
                      <span className="text-emerald-700 font-mono text-[11px] font-bold">Podium Finish</span>
                    </div>
                    <p className="text-xs text-slate-700">
                      Secured third place in an inter-school chess championship, showcasing strategic thinking, concentration, and analytical decision-making.
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-semibold block">
                  Skills Matrix
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {PORTFOLIO_DATA.skills.map((s) => (
                    <span
                      key={s.name}
                      className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200 font-medium"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
