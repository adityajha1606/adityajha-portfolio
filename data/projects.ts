export type ProjectCategory = 'ml-ai' | 'fullstack' | 'tools';
export type ProjectStatus   = 'live' | 'wip' | 'archived';
export type ProjectRole     = 'sole-author' | 'contributor';

export interface MlMetrics {
  model: string;
  metric: string;
  value?: string;
  comparison?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  coverImage?: string;
  coverImageAlt?: string;
  category: ProjectCategory;
  tags: string[];
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  year: number;
  status: ProjectStatus;
  role: ProjectRole;
  myContribution?: string;
  metrics?: string;
  mlMetrics?: MlMetrics;
  writingSlug?: string;
  deadline?: string;
}

export const projects: Project[] = [
  {
    id: 'football-impact-rating',
    title: 'Football Player Impact Rating System',
    slug: 'football-impact-rating',
    shortDescription:
      'Quantified football player impact using 500,000+ Statsbomb match events with an XGBoost model deployed on Streamlit.',
    longDescription:
      'Built a complete ML pipeline from raw Statsbomb event data through feature engineering, model training, and a Streamlit dashboard. Trained an XGBoost classifier that outperformed a Random Forest baseline. Processes over 500,000 match events to produce per-player impact scores across attacking, defensive, and transitional phases.',
    category: 'ml-ai',
    tags: ['Python', 'XGBoost', 'Pandas', 'Streamlit'],
    techStack: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn', 'Streamlit'],
    repoUrl: 'https://github.com/adityajha1606/football-impact-rating',
    featured: true,
    year: 2025,
    status: 'live',
    role: 'sole-author',
    metrics: '500K+ events · Live on Streamlit',
    mlMetrics: {
      model: 'XGBoost',
      metric: 'Accuracy',
      comparison: 'Outperformed Random Forest baseline',
    },
    writingSlug: 'football-player-impact-rating-system',
  },
  {
    id: 'nmdc-event-management',
    title: 'NMDC Event Management & Reporting System',
    slug: 'nmdc-event-management',
    shortDescription:
      "Enterprise event management and reporting system built solo for NMDC Limited, India's largest iron ore producer.",
    longDescription:
      'A full-stack enterprise application built on ASP.NET Core (.NET 10) with Razor Pages, Entity Framework Core, and SQL Server. Features real-time event notifications via SignalR, interactive dashboards with Chart.js, and PDF generation via QuestPDF. Deployed to production IIS for a government client with real users and real operational data.',
    category: 'fullstack',
    tags: ['ASP.NET Core', 'SQL Server', 'SignalR', 'Chart.js', 'QuestPDF'],
    techStack: [
      'ASP.NET Core (.NET 10)',
      'Razor Pages',
      'Entity Framework Core',
      'SQL Server',
      'SignalR',
      'Chart.js',
      'QuestPDF',
      'IIS',
    ],
    featured: true,
    year: 2026,
    status: 'wip',
    role: 'sole-author',
    metrics: 'Production IIS · Government client',
    deadline: '2026-07-15',
  },
  {
    id: 'stock-prediction-classifier',
    title: 'Stock Prediction Classifier',
    slug: 'stock-prediction-classifier',
    shortDescription:
      'Stock movement classifier trained on historical market data.',
    longDescription:
      'A binary classifier that predicts next-day stock price direction using technical indicators and engineered features derived from historical OHLCV data. Currently in active development with a July 2026 target date.',
    category: 'ml-ai',
    tags: ['Python', 'ML'],
    techStack: ['Python', 'Scikit-learn', 'Pandas'],
    featured: false,
    year: 2026,
    status: 'wip',
    role: 'sole-author',
    deadline: '2026-07-31',
  },
  {
    id: 'meterdown',
    title: 'MeterDown',
    slug: 'meterdown',
    shortDescription:
      'Contributed the invoice generation module and SQLite schema to a desktop billing application.',
    longDescription:
      'A Java Swing desktop application for billing and meter management. Contributed the invoice generation module, SQLite schema design, and database integration layer.',
    category: 'tools',
    tags: ['Java Swing', 'SQLite'],
    techStack: ['Java', 'Java Swing', 'SQLite'],
    featured: false,
    year: 2025,
    status: 'live',
    role: 'contributor',
    myContribution:
      'Built the invoice generation module and SQLite schema.',
  },
  {
    id: 'openiris',
    title: 'OpenIris',
    slug: 'openiris',
    shortDescription:
      'Contributed the screen reader compatibility layer to a Chrome extension that enhances web accessibility.',
    longDescription:
      'A Chrome extension built on Manifest V3 that improves web accessibility for users with visual impairments. Contributed content script logic and implemented the screen reader compatibility layer.',
    category: 'tools',
    tags: ['Chrome Extension', 'Manifest V3'],
    techStack: ['JavaScript', 'Chrome Extension API', 'Manifest V3'],
    featured: false,
    year: 2025,
    status: 'live',
    role: 'contributor',
    myContribution:
      'Implemented the screen reader compatibility layer.',
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => b.year - a.year);