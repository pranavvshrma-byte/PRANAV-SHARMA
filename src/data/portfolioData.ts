import avatarImg from '../assets/images/pranav_profile_photo_1791906263244.jpg';

export interface EducationItem {
  id: string;
  course: string;
  institution: string;
  year: string;
  score: string;
  scoreLabel: string;
  status: 'Ongoing' | 'Completed';
  highlights: string[];
  description: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  category: 'workshop' | 'sports' | 'competition';
  organization: string;
  period: string;
  summary: string;
  points: string[];
  skillsApplied: string[];
  featuredTakeaway: string;
}

export interface SkillItem {
  name: string;
  category: 'Technical' | 'Strategic & Analytical' | 'Interpersonal & Leadership';
  description: string;
  evidence: string;
  level: number; // 1-100
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Pranav Sharma',
    role: 'Computer Science & Engineering Student',
    institution: 'VIT Vellore',
    degree: 'B.Tech CSE (Core)',
    currentYear: 'First Year',
    age: '18',
    email: 'pranavvshrma@gmail.com',
    location: 'Vellore / Ghaziabad, India',
    avatar: avatarImg,
    summary:
      'A first-year Computer Science and Engineering (CSE Core) student at VIT Vellore with a strong interest in web development and game development. Possesses a keen interest in programming, problem-solving, and emerging technologies, complemented by adaptability, analytical thinking, creativity, and a commitment to continuous learning and professional growth.',
    stats: [
      { label: 'CBSE Class X', value: '92.6%' },
      { label: 'CBSE Class XII', value: '91.2%' },
      { label: 'Computer Science Score', value: '96/100' },
      { label: 'Inter-School Chess', value: '3rd Place' },
    ],
  },
  education: [
    {
      id: 'vit',
      course: 'B.Tech in Computer Science and Engineering (CSE Core)',
      institution: 'VIT Vellore (Vellore Institute of Technology)',
      year: '2026 – Present',
      score: 'First Year',
      scoreLabel: 'Current Program',
      status: 'Ongoing',
      highlights: [
        'Core curriculum in Data Structures, Discrete Mathematics, and Computing Systems',
        'Specializing in Modern Web Architecture and Interactive Game Engine mechanics',
        'Active member of campus technical development communities',
      ],
      description:
        'Pursuing foundational computing theory and engineering principles at one of India’s top technological institutes, channeling theoretical knowledge into high-performance web applications and interactive games.',
    },
    {
      id: 'class12',
      course: 'CBSE Class XII (Senior Secondary)',
      institution: 'Seth Anandram Jaipuria School, Ghaziabad',
      year: '2026',
      score: '91.2%',
      scoreLabel: 'Aggregate Score',
      status: 'Completed',
      highlights: [
        'Achieved a standout score of 96/100 in Chemistry in CBSE Class XII Board Examination',
        'Excelled across advanced Physics, Chemistry, Mathematics, and Computer Science',
        'Balanced rigorous academics with school football representation at regional clusters',
      ],
      description:
        'Completed higher secondary education with distinction, demonstrating consistent academic rigor, problem-solving methodology, and scientific curiosity.',
    },
    {
      id: 'class10',
      course: 'CBSE Class X (Secondary)',
      institution: 'Seth Anandram Jaipuria School, Ghaziabad',
      year: '2024',
      score: '92.6%',
      scoreLabel: 'Aggregate Score',
      status: 'Completed',
      highlights: [
        'Achieved 96/100 in Computer Science in CBSE Class X Board Examination',
        'Achieved 95/100 in Mathematics and Science in CBSE Class X Board Examination',
        'Ranked among the top scholastic performers in STEM subjects',
      ],
      description:
        'Formed foundational mastery in analytical reasoning, algebraic structures, and algorithmic computer science concepts with high board examination honors.',
    },
  ] as EducationItem[],
  experiences: [
    {
      id: 'techsphere',
      title: 'TechSphere: Computer Science & Game Development Workshop',
      role: 'Workshop Participant & Project Builder',
      category: 'workshop',
      organization: 'TechSphere Intensive Programs',
      period: 'One-Week Intensive Workshop',
      summary:
        'Participated in an intensive week-long workshop focused on computer science foundations, web development architecture, and interactive game design principles.',
      points: [
        'Explored fundamental programming concepts, object-oriented logic, and algorithmic efficiency.',
        'Studied the principles of interactive website mechanics and responsive browser rendering.',
        'Gained hands-on exposure to 2D game loops, state machines, sprite physics, and collision logic.',
        'Honed rapid problem-solving, creative systems thinking, and exploration of emerging web technologies.',
      ],
      skillsApplied: ['Web Development', 'Game Design Loops', 'Programming Logic', 'Creative Problem Solving'],
      featuredTakeaway:
        'Learned to bridge mathematical models with visual feedback loops by constructing interactive web and game prototypes.',
    },
    {
      id: 'chess',
      title: 'Inter-School Chess Competition',
      role: 'Competitive Chess Player',
      category: 'competition',
      organization: 'Inter-School Athletic & Cognitive Meet',
      period: 'Inter-School Championship',
      summary:
        'Secured third place in a competitive inter-school chess championship, exhibiting strategic depth, patience, and analytical decision-making under strict time controls.',
      points: [
        'Formulated multi-turn tactical plans, identifying board asymmetries and positional advantages.',
        'Demonstrated intense concentration and emotional resilience during high-stakes endgame scenarios.',
        'Applied structured root-cause analysis and threat calculation against diverse playing styles.',
        'Secured podium finish (3rd Place) representing school in a multi-round knockout format.',
      ],
      skillsApplied: ['Strategic Thinking', 'Analytical Decision-Making', 'Time Management', 'Pattern Recognition'],
      featuredTakeaway:
        'Chess instilled a disciplined habit of evaluating multiple branching outcomes before committing to a decision — a direct analog to algorithmic engineering.',
    },
    {
      id: 'football',
      title: 'Football Player – Clusters Tournament',
      role: 'Team Representative (School Squad)',
      category: 'sports',
      organization: 'Seth Anandram Jaipuria School | Class XII',
      period: 'CBSE Clusters Tournament',
      summary:
        'Represented the school squad in the prestigious CLUSTERS football tournament, demonstrating tactical discipline, physical coordination, and proactive team collaboration.',
      points: [
        'Represented school in the CLUSTERS football tournament, demonstrating teamwork, discipline, and coordination.',
        'Collaborated with teammates to execute dynamic pitch strategies and perform effectively in a competitive environment.',
        'Adapted formations in real-time under competitive pressure against top regional schools.',
        'Maintained rigorous conditioning schedules alongside Class XII board preparation.',
      ],
      skillsApplied: ['Teamwork & Coordination', 'High-Pressure Execution', 'Adaptability', 'Discipline & Grit'],
      featuredTakeaway:
        'Learned that team success requires clear on-field communication, selfless role execution, and synchronized movement toward a shared objective.',
    },
  ] as ExperienceItem[],
  skills: [
    {
      name: 'Technical Aptitude',
      category: 'Technical',
      description: 'Quick adoption of programming paradigms, API structures, modern web frameworks, and computing theory.',
      evidence: '96/100 in Class X CS, TechSphere workshop implementation, B.Tech CSE Core enrollment at VIT.',
      level: 92,
    },
    {
      name: 'Web & Game Development',
      category: 'Technical',
      description: 'Understanding interactive canvas pipelines, event loops, responsive UI components, and game state mechanics.',
      evidence: 'Completed 1-week TechSphere workshop; built interactive game and tactical simulations.',
      level: 88,
    },
    {
      name: 'Problem Solving',
      category: 'Technical',
      description: 'Breaking down complex challenges into modular, deterministic logical steps with computational efficiency.',
      evidence: 'Top board scores in Mathematics & Science (95/100) and CS (96/100).',
      level: 94,
    },
    {
      name: 'Creativity',
      category: 'Technical',
      description: 'Designing interactive web interfaces, game mechanics, and novel approaches to software design.',
      evidence: 'TechSphere game design workshop and interactive web prototyping.',
      level: 90,
    },
    {
      name: 'Strategic Thinking',
      category: 'Strategic & Analytical',
      description: 'Anticipating downstream consequences, weighing tradeoffs, and optimizing decision paths under constraints.',
      evidence: '3rd Place in Inter-School Chess Competition with multi-round tactical analysis.',
      level: 95,
    },
    {
      name: 'Analytical Decision-Making',
      category: 'Strategic & Analytical',
      description: 'Filtering noise, evaluating quantitative evidence, and making sound judgments in high-stakes environments.',
      evidence: 'Proven through competitive chess tournament matches and 96/100 Chemistry board achievement.',
      level: 90,
    },
    {
      name: 'Teamwork & Coordination',
      category: 'Interpersonal & Leadership',
      description: 'Collaborating harmoniously, communicating clearly, and aligning individual effort with collective goals.',
      evidence: 'Represented Seth Anandram Jaipuria School in the regional CLUSTERS Football Tournament.',
      level: 92,
    },
    {
      name: 'Adaptability & Resilience',
      category: 'Interpersonal & Leadership',
      description: 'Embracing evolving technologies, adjusting tactics when variables shift, and thriving in novel challenges.',
      evidence: 'Successfully transitioning from school excellence to rigorous engineering at VIT Vellore.',
      level: 93,
    },
    {
      name: 'Self Motivation & Continuous Learning',
      category: 'Interpersonal & Leadership',
      description: 'Proactively exploring modern technologies, seeking specialized workshops, and pursuing constant refinement.',
      evidence: 'Voluntary enrollment in TechSphere workshop and constant exploration of interactive development.',
      level: 95,
    },
    {
      name: 'Time Management',
      category: 'Interpersonal & Leadership',
      description: 'Balancing rigorous scholastic coursework, athletic tournaments, and self-directed coding projects.',
      evidence: 'Achieved >91% in CBSE Class XII while playing competitive football and tournament chess.',
      level: 91,
    },
  ] as SkillItem[],
};
