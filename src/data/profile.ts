export const profile = {
  name: 'Mohamed Gamal Yaseen',
  shortName: 'Mohamed Gamal',
  title: 'Senior Flutter Developer',
  intro:
    'Five years building and shipping Flutter apps for Android and iOS — including an offline-first POS & ERP system and a real-estate investment app that I built end to end.',
  /** Search/social description, kept under ~160 characters */
  metaDescription:
    'Mohamed Gamal Yaseen, Senior Flutter Developer. 5 years building Android & iOS apps end to end, including an offline-first POS and a real-estate investment app.',
  /** Social preview card in public/ (regenerate with npm run brand) */
  ogImage: 'og.jpg',
  email: 'mohamedgamaldev11@gmail.com',
  /** From the CV: (+20) 1092069232 */
  phone: '+201092069232',
  links: {
    github: 'https://github.com/gemydev',
    linkedin: 'https://www.linkedin.com/in/gemydev',
    whatsapp: 'https://wa.me/201092069232',
  },
  cvFile: 'cv/Mohamed-Gamal-Senior-Flutter-Developer-CV.pdf',
  facts: [
    { value: '5+', label: 'years building with Flutter', note: 'since Oct 2021' },
    { value: '15+', label: 'apps published on the stores', note: 'Google Play / App Store' },
  ],
  about: [
    "I'm a Senior Flutter Developer who takes ownership of the whole application — not just the screens. I built four products in their entirety, from the first architecture decisions through to delivery.",
    'My strongest work sits where mobile gets difficult: an offline-first POS & ERP system that runs on a local database and syncs with the server later, phone and tablet layouts from a single codebase, and a real-estate investment app with complex financial requirements.',
    "I've shipped across fintech, retail, B2B wholesale, customer support, on-demand services, food delivery and legal-tech — working closely with designers and product teams on apps for the Saudi and Egyptian markets.",
  ],
  focus: [
    'Offline-first apps & data sync',
    'BLoC / Cubit architecture',
    'Phone & tablet adaptive UI',
    'Real-time communication',
    'Thermal printing (ESC/POS)',
    'CI/CD & store releases',
  ],
} as const;
