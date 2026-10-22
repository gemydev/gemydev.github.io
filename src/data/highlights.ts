export interface Highlight {
  title: string;
  body: string;
  proof: string;
  /** "product" = backed by a named project; "practice" = how I work, backed by the tools I use */
  kind?: 'product' | 'practice';
}

// Product highlights are backed by projects named in the CV; practice highlights by the tools listed in it.
export const highlights: Highlight[] = [
  {
    title: 'Performance & production stability',
    body: 'I treat performance as a feature: profiling rendering, memory and jank with Flutter DevTools, and watching crashes, errors and app health in production with Sentry, Firebase Crashlytics and Analytics so problems are found and fixed early.',
    proof: 'Flutter DevTools · Sentry · Crashlytics · Firebase Analytics',
    kind: 'practice',
  },
  {
    title: 'Security-minded mobile development',
    body: 'Security is part of delivery, not a final checkbox: I review apps against OWASP MASVS/MASTG, test them with MobSF, Frida and Burp Suite, and scan code and dependencies with Semgrep and Snyk.',
    proof: 'OWASP MASVS/MASTG · MobSF · Frida · Burp Suite · Semgrep · Snyk',
    kind: 'practice',
  },
  {
    title: 'Offline-first architecture',
    body: 'A POS & ERP system where the app runs on a local database and syncs with the server later, so the app keeps working without a connection.',
    proof: 'GoooBig POS · TechPlace',
  },
  {
    title: 'End-to-end product ownership',
    body: 'Four products where I built the entire application — architecture, UI and integrations through to delivery.',
    proof: 'Keld investment app · GoooBig POS · DeepIdea · Aqua Pure',
  },
  {
    title: 'Complex financial domain',
    body: 'A real-estate investment app with complex financial details, delivered alongside a full product team to standard specifications.',
    proof: 'Keld Development',
  },
  {
    title: 'One codebase, phones and tablets',
    body: 'Adaptive layouts that run on every phone and tablet size on both Android and iOS.',
    proof: 'GoooBig POS',
  },
  {
    title: 'Multi-role app ecosystems',
    body: 'Apps that come in pairs — one for customers and one for the people serving them.',
    proof: 'Qimaa (customer & salesperson) · Gearshift (customer & washer)',
  },
];

