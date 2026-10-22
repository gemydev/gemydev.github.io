export const profile = {
  name: 'Mohamed Gamal Yaseen',
  shortName: 'Mohamed Gamal',
  title: 'Senior Flutter Developer',
  intro:
    'Five years building and shipping fast, secure Flutter apps for Android and iOS, on phones and tablets: from an offline-first POS & ERP system and a real-estate investment app I built end to end, to marketplaces, e-commerce and B2B products.',
  /** Types of apps shown under the intro (all from the projects section) */
  appTypes: ['Fintech', 'POS & ERP', 'Food marketplace', 'E-commerce', 'Legal-tech', 'B2B & SaaS', 'Community', 'On-demand'],
  /** Search/social description, kept under ~160 characters */
  metaDescription:
    'Mohamed Gamal, Senior Flutter Developer. 5 years building fast, secure Android & iOS apps, including an offline-first POS and a real-estate investment app.',
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
    'Performance and security are part of how I build, not an afterthought. I profile and debug with Flutter DevTools, keep an eye on production health with Sentry, Firebase Crashlytics and Analytics, and review apps against OWASP MASVS/MASTG, testing with MobSF, Frida and Burp Suite and scanning code with Semgrep and Snyk.',
    "That discipline matters most where mobile gets difficult: an offline-first POS & ERP system that keeps working on a local database and syncs later, one codebase for phones and tablets, and a real-estate investment app with complex financial requirements — across fintech, retail, B2B, marketplaces and legal-tech for the Saudi and Egyptian markets.",
  ],
  focus: [
    'App performance & profiling',
    'Mobile security (OWASP MASVS)',
    'Production monitoring & debugging',
    'Offline-first apps & data sync',
    'BLoC / Cubit architecture',
    'Phone & tablet adaptive UI',
    'Real-time communication',
    'CI/CD & store releases',
  ],
} as const;
