export interface Role {
  title: string;
  company: string;
  url?: string;
  start: string;
  end: string;
  summary: string;
  points: string[];
  projects: string[];
}

export const experience: Role[] = [
  {
    title: 'Senior Flutter Developer',
    company: 'Keld Development',
    url: 'https://www.keld.sa/',
    start: 'Nov 2024',
    end: 'Present',
    summary: 'Real-estate investment product with complex financial details.',
    points: [
      'Built the entire real-estate investment app for Android and iOS (under NDA).',
      'Worked with a full product team to deliver a high-quality app to standard specifications.',
    ],
    projects: ['Real-Estate Investment App'],
  },
  {
    title: 'Flutter Developer',
    company: 'TechPlace',
    url: 'http://tp.net.sa/',
    start: 'Nov 2022',
    end: 'Oct 2024',
    summary: 'POS & ERP and customer-support products.',
    points: [
      'Built GoooBig POS end to end — an offline-first POS & ERP system for phones and tablets.',
      'Built DeepIdea end to end — a ticketing system for customer-support teams.',
      'Worked with designers to turn designs into clean, intuitive production UI.',
    ],
    projects: ['GoooBig POS', 'DeepIdea'],
  },
  {
    title: 'Flutter Developer',
    company: 'CodeCaique',
    start: 'Oct 2021',
    end: 'Nov 2022',
    summary: 'Client projects including e-commerce and Qur’an services apps.',
    points: [
      'Implemented the UI and API integration of the Qimaa salesperson app, plus parts of the customer app.',
      'Worked on the Gearshift car-wash apps and the Hawi clubs & events app.',
      'Wrote clean, maintainable code for multiple client products.',
    ],
    projects: ['Qimaa', 'Gearshift', 'Hawi'],
  },
];
