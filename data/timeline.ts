export type TimelineEventType = 'education' | 'work' | 'achievement' | 'project';

export interface TimelineEvent {
  year: string;
  month?: string;
  title: string;
  subtitle: string;
  type: TimelineEventType;
}

export const timeline: TimelineEvent[] = [
  { year: '2024', month: 'August', title: 'Joined SRMIST', subtitle: 'B.Tech CSE · Kattankulathur', type: 'education' },
  { year: '2025', title: 'Secretary to Convenor', subtitle: 'SRMIST Literary Society', type: 'work' },
  { year: '2025', title: 'Football Player Impact Rating System', subtitle: 'Deployed · Sole author · 500K+ events', type: 'project' },
  { year: '2026', title: 'Top 20 Nationally', subtitle: 'HackSummit 6.0', type: 'achievement' },
  { year: '2026', month: 'June', title: 'SDE Intern · NMDC Limited', subtitle: 'Government of India · Sole author · Production IIS', type: 'work' },
];