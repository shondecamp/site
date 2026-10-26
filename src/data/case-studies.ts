// Case studies in reading order. Drives the at-a-glance box and the previous/next links.
// Leave a field out when there is no verified fact for it; the page skips empty fields.
export interface CaseStudy {
  href: string;
  title: string;
  /** One sentence for search results and link previews. */
  description?: string;
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
    href: '/ReferAFriend.html',
    title: 'Refer-a-Friend: Turning Hidden Demand into a Measured Launch',
    description:
      'How Shon DeCamp found hidden referral demand in customer data, chose and scoped a lean v1, managed launch risks, and measured the outcome.',
    company: 'Melaleuca: The Wellness Company',
    role: 'Senior Digital Product Manager',
    platform: 'E-commerce web',
    outcome: 'Measured lift in referrals and new enrollments',
  },
  {
    href: '/SorensonRearchitecture.html',
    title: 'Re-Architecting an Interpreter Scheduling Platform',
    description:
      'Product management for the re-architecture of Sorenson’s interpreter scheduling platform: average monthly downtime from 9.7 hours to 13 minutes.',
    company: 'Sorenson Communications',
    role: 'Product manager and lead designer',
    timeline: 'Aug 2018 – Jan 2020',
    platform: 'Internal web platform',
    outcome: 'Average monthly downtime from 9.7 hours to 13 minutes',
  },
  {
    href: '/Design System.html',
    title: 'Founding Accela’s Company-Wide Design System Program',
    description:
      'Founding and leading Accela’s company-wide design system program across product, design and engineering, reaching WCAG AA compliance.',
    company: 'Accela',
    role: 'Program manager, product manager, lead designer, researcher',
    timeline: 'Feb 2023 – Jun 2024',
    platform: 'Responsive Web',
    outcome: 'WCAG AA compliance; 3 teams aligned on one system',
  },
  {
    href: '/CareNotes.html',
    title: 'InteractiveCare: Taking a Healthcare Product from 0 to 1',
    description:
      'Research, discovery and strategy for InteractiveCare, a 0-to-1 home health product, tested with about two dozen nurses.',
    company: 'InteractiveCare (Sorenson)',
    role: 'Product strategist, sole UX resource',
    timeline: 'Jan 2018 – Aug 2018',
    platform: 'Native Mobile App',
    outcome: 'Tested 0-to-1 concept with about two dozen nurses',
  },
  {
    href: '/Checklist.html',
    title: 'Mobile Inspection Checklists',
    description:
      'Redesigning inspection checklists in the Accela Mobile app after testing concepts with field inspectors: active users up 20%, CSAT up 10%.',
    company: 'Accela',
    role: 'Lead Product Designer',
    platform: 'Enterprise Mobile App',
    outcome: 'Active users up 20%, CSAT up 10%',
  },
  {
    href: '/Inspection Groups.html',
    title: 'Inspection Groups',
    description:
      'Remapping data relationships and redesigning Accela’s inspection group admin screens: System Usability Score up 12%.',
    company: 'Accela',
    role: 'Lead Product Designer',
    platform: 'Responsive Web App',
    outcome: 'System Usability Score up 12%',
  },
];
