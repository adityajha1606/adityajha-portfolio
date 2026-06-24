export type SkillCategory = 'language' | 'framework' | 'ml-data' | 'tools' | 'learning';
export type SkillLevel    = 'primary' | 'secondary' | 'learning';

export interface Skill {
  name: string;
  category: SkillCategory;
  lore: string;
  level: SkillLevel;
}

export const skills: Skill[] = [
  { name: 'Python',       category: 'language',   lore: 'Primary language. Three deployed projects.', level: 'primary' },
  { name: 'TypeScript',   category: 'language',   lore: 'This website.', level: 'primary' },
  { name: 'C++',          category: 'language',   lore: 'DSA. Striver A2Z in progress.', level: 'secondary' },
  { name: 'C#',           category: 'language',   lore: 'NMDC system. Production IIS.', level: 'primary' },
  { name: 'SQL',          category: 'language',   lore: 'SQL Server for the NMDC system; SQLite for MeterDown.', level: 'primary' },
  { name: 'Next.js',      category: 'framework',  lore: 'Framework of choice for anything with a user.', level: 'primary' },
  { name: 'React',        category: 'framework',  lore: 'The UI layer under every Next.js project.', level: 'primary' },
  { name: 'ASP.NET Core', category: 'framework',  lore: 'Enterprise MVC and Razor Pages for government-grade software.', level: 'primary' },
  { name: 'FastAPI',      category: 'framework',  lore: 'Go-to for Python API endpoints when speed matters.', level: 'secondary' },
  { name: 'Scikit-learn', category: 'ml-data',    lore: 'Baseline models, pipelines, and evaluation.', level: 'primary' },
  { name: 'XGBoost',      category: 'ml-data',    lore: 'Outperformed Random Forest on the football rating task.', level: 'primary' },
  { name: 'Pandas',       category: 'ml-data',    lore: 'Feature engineering on 500,000+ event rows.', level: 'primary' },
  { name: 'EF Core',      category: 'ml-data',    lore: 'ORM for the NMDC SQL Server schema.', level: 'primary' },
  { name: 'Git',          category: 'tools',      lore: "Daily driver. Green graph or it didn't happen.", level: 'primary' },
  { name: 'SignalR',      category: 'tools',      lore: 'Real-time event notifications. NMDC dashboard.', level: 'primary' },
  { name: 'Chart.js',     category: 'tools',      lore: 'Interactive reporting charts in the NMDC system.', level: 'secondary' },
  { name: 'QuestPDF',     category: 'tools',      lore: 'Programmatic PDF report generation for NMDC exports.', level: 'secondary' },
  { name: 'IIS',          category: 'tools',      lore: 'Production deployment target for the NMDC system.', level: 'secondary' },
  { name: 'Docker',       category: 'learning',   lore: 'Learning because "works on my machine" is not a deployment strategy.', level: 'learning' },
  { name: 'Andrew Ng ML Specialization', category: 'learning', lore: 'Formalising the theory behind the models already in production.', level: 'learning' },
  { name: 'Striver A2Z DSA', category: 'learning', lore: 'Systematic DSA — no shortcuts, no skipped topics.', level: 'learning' },
];

export const skillsByCategory: Record<SkillCategory, Skill[]> = {
  language:  skills.filter((s) => s.category === 'language'),
  framework: skills.filter((s) => s.category === 'framework'),
  'ml-data': skills.filter((s) => s.category === 'ml-data'),
  tools:     skills.filter((s) => s.category === 'tools'),
  learning:  skills.filter((s) => s.category === 'learning'),
};