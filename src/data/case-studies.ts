// Case studies in reading order. Drives the at-a-glance box and the previous/next links.
// Leave a field out when there is no verified fact for it; the page skips empty fields.
export interface CaseStudy {
  href: string;
  title: string;
  company?: string;
  role?: string;
  timeline?: string;
  platform?: string;
  outcome?: string;
  /** false keeps the page live but out of previous/next links (and off the home page). */
  listed?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    href: '/SorensonRearchitecture.html',
    title: 'Re-Architecting a Workforce and Accessibility Platform',
    company: 'Sorenson Communications',
    role: 'Product manager and lead designer',
    timeline: 'Aug 2018 – Jan 2020',
    platform: 'Responsive Web',
    outcome: 'Average monthly downtime from 9.7 hours to 13 minutes',
  },
  {
    href: '/Design System.html',
    title: 'Designing a Scalable Enterprise Design System for Government Financial Platforms',
    company: 'Accela',
    role: 'Lead Designer, Program Manager, Product Manager, Researcher',
    timeline: 'Feb 2023 – Jun 2024',
    platform: 'Responsive Web',
    outcome: '120% increase in design system adoption; WCAG AA compliance',
  },
  {
    href: '/CareNotes.html',
    title: 'CareNotes',
    company: 'InteractiveCare (Sorenson)',
    role: 'UX Strategist, sole UX resource',
    timeline: 'Jan 2018 – Aug 2018',
    platform: 'Native Mobile App',
    outcome: '0-1 Startup Product Launch',
  },
  {
    href: '/Checklist.html',
    title: 'Mobile Checklists',
    company: 'Accela',
    role: 'Lead Product Designer',
    platform: 'Enterprise Mobile App',
    outcome: 'Active users up 20%, CSAT up 10%',
  },
  {
    href: '/Inspection Groups.html',
    title: 'Inspection Groups',
    company: 'Accela',
    role: 'Lead Product Designer',
    platform: 'Responsive Web App',
    outcome: 'System Usability Score up 12%',
    listed: false,
  },
];
