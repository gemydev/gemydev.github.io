export type LinkKind = 'play' | 'appstore' | 'github';

export interface ProjectLink {
  kind: LinkKind;
  label: string;
  url: string;
}

export interface Project {
  name: string;
  /** Original Arabic name, rendered with lang="ar" */
  localName?: string;
  /** Employer or context, only when stated in the CV */
  org?: string;
  period?: string;
  domain: string;
  platforms?: string;
  summary: string;
  /** Only filled when the CV states the contribution */
  contribution?: string;
  highlights?: string[];
  tags: string[];
  links?: ProjectLink[];
  nda?: boolean;
  /** Decorative illustration style for featured projects */
  art?: 'pos' | 'invest' | 'commerce' | 'tickets' | 'food' | 'events' | 'legal';
}

export const featuredProjects: Project[] = [
  {
    name: 'GoooBig POS',
    org: 'TechPlace',
    period: '2022 – 2024',
    domain: 'Retail · POS & ERP · Saudi Arabia',
    platforms: 'Android & iOS · phones & tablets',
    summary:
      'An offline-first point-of-sale and ERP system for managing commercial activities in Saudi Arabia.',
    contribution: 'I built the entire application.',
    highlights: [
      'Works against a local database first, then syncs with the server at the appropriate time.',
      'One codebase adapted to every phone and tablet size on Android and iOS.',
    ],
    tags: ['Flutter', 'Offline-first', 'Local database', 'Data sync', 'Adaptive UI'],
    links: [
      {
        kind: 'play',
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.techplace.gooobig.pos&hl=en',
      },
    ],
    art: 'pos',
  },
  {
    name: 'Real-Estate Investment App',
    org: 'Keld Development',
    period: '2024 – Present',
    domain: 'Fintech · Real-estate investment',
    platforms: 'Android & iOS',
    summary:
      'A real-estate investment product with complex financial details, delivered with a full product team to standard specifications.',
    contribution: 'Built the entire application as Senior Flutter Developer.',
    tags: ['Flutter', 'Fintech', 'Android', 'iOS'],
    nda: true,
    art: 'invest',
  },
  {
    name: 'Aqua Pure',
    domain: 'E-commerce · Subscription delivery',
    platforms: 'Android & iOS',
    summary:
      'A commerce app for water filters, dispensers and purified water, built around repeat orders.',
    contribution: 'I built the entire application.',
    highlights: [
      'Product browsing and comparison, ordering, offers and order tracking.',
      'Scheduled recurring deliveries and filter-replacement reminders.',
    ],
    tags: ['Flutter', 'E-commerce', 'Recurring orders', 'Reminders'],
    links: [
      { kind: 'play', label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.aquapure.app' },
      { kind: 'appstore', label: 'App Store', url: 'https://apps.apple.com/eg/app/aquapure/id6763398672' },
    ],
    art: 'commerce',
  },
  {
    name: 'DeepIdea',
    org: 'TechPlace',
    domain: 'B2B SaaS · Customer support',
    platforms: 'Android & iOS',
    summary:
      'A ticketing management system that helps company support employees manage their clients’ tickets.',
    contribution: 'I built the entire application.',
    tags: ['Flutter', 'B2B', 'Ticketing'],
    art: 'tickets',
  },
  {
    name: 'Tanoor — Customer & Store',
    domain: 'Food marketplace · Saudi Arabia',
    platforms: 'Android & iOS · two apps',
    summary:
      'A two-sided marketplace for homemade food: customers order from Saudi families, and the store app lets restaurants and home-based businesses apply and join the platform.',
    highlights: [
      'Customer app for ordering homemade food from local families.',
      'Store app for restaurants and home businesses to join and sell.',
    ],
    tags: ['Marketplace', 'Two apps', 'Food delivery'],
    links: [
      { kind: 'play', label: 'Customer · Play', url: 'https://play.google.com/store/apps/details?id=com.tanoor.customer' },
      { kind: 'appstore', label: 'Customer · iOS', url: 'https://apps.apple.com/us/app/tanoor/id6756511418' },
      { kind: 'play', label: 'Store · Play', url: 'https://play.google.com/store/apps/details?id=com.tanoor.store' },
      { kind: 'appstore', label: 'Store · iOS', url: 'https://apps.apple.com/us/app/tanoor-store/id6756564610' },
    ],
    art: 'food',
  },
  {
    name: 'Hawi',
    localName: 'هاوي',
    org: 'CodeCaique',
    domain: 'Community · Clubs & events',
    platforms: 'Android & iOS',
    summary: 'A community app for subscribing to real and virtual clubs, following their events and booking attendance.',
    highlights: ['Club subscriptions, event feeds and attendance booking in one app.'],
    tags: ['Community', 'Events', 'Bookings'],
    links: [
      { kind: 'play', label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.hawi.qol&hl=en' },
      { kind: 'appstore', label: 'App Store', url: 'https://apps.apple.com/us/app/id1594176538' },
    ],
    art: 'events',
  },
  {
    name: 'Mohamy Online',
    localName: 'محامي أونلاين',
    domain: 'Legal-tech · Egypt',
    platforms: 'Android & iOS',
    summary:
      'A digital platform for legal services in Egypt that connects clients with certified, specialised lawyers to handle legal tasks remotely.',
    highlights: ['Legal tasks handled remotely by specialised lawyers, saving clients time and effort.'],
    tags: ['Legal-tech', 'Marketplace'],
    links: [
      { kind: 'play', label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.mohamyonline&hl=en' },
      {
        kind: 'appstore',
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/%D9%85%D8%AD%D8%A7%D9%85%D9%8A-%D8%A3%D9%88%D9%86%D9%84%D8%A7%D9%8A%D9%86/id6803960739',
      },
    ],
    art: 'legal',
  },
];

export const otherProjects: Project[] = [
  {
    name: 'Qimaa — Customer & Salesperson',
    org: 'CodeCaique',
    domain: 'B2B wholesale',
    summary: 'Business app for a wholesale company, split into a customer app and a salesperson app.',
    contribution: 'Salesperson app UI and API integration; parts of the customer app UI.',
    tags: ['REST API', 'Two apps'],
  },
  {
    name: 'Gearshift — Customer & Washer',
    org: 'CodeCaique',
    domain: 'On-demand services',
    summary: 'Request a car wash, choose from suggested washers, follow the wash and rate the washer.',
    tags: ['On-demand', 'Two apps'],
  },
  {
    name: 'ASAR',
    org: 'Graduation project',
    domain: 'AI · Arabic manuscript recognition',
    summary:
      'Mobile and web app connected to a deep-learning model that recognises words in Arabic manuscript images and outputs digital text.',
    tags: ['Deep learning', 'OCR'],
    links: [{ kind: 'github', label: 'GitHub', url: 'https://github.com/space-codes/asar.mobile' }],
  },
];
