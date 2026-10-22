export interface Highlight {
  title: string;
  body: string;
  proof: string;
}

// Each highlight is backed by a project named in the CV.
export const highlights: Highlight[] = [
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

