export interface SkillGroup {
  category: string;
  items: { name: string; level?: string }[];
}

// Levels only where the CV states them.
export const skills: SkillGroup[] = [
  {
    category: 'Mobile development',
    items: [
      { name: 'Flutter' }, { name: 'Dart' }, { name: 'Responsive & adaptive UI' },
      { name: 'Animations' }, { name: 'Localization' }, { name: 'Flavors' }, { name: 'Deep links & App Links' },
    ],
  },
  {
    category: 'Architecture & state',
    items: [
      { name: 'BLoC & Cubit', level: 'Advanced' }, { name: 'Riverpod', level: 'Working knowledge' },
      { name: 'Dependency injection' }, { name: 'SOLID' }, { name: 'OOP' }, { name: 'Design patterns' },
    ],
  },
  {
    category: 'Networking & real-time',
    items: [
      { name: 'REST APIs' }, { name: 'dio' }, { name: 'http' }, { name: 'WebSocket' },
      { name: 'Socket.IO' }, { name: 'WebRTC (video & voice)' }, { name: 'ZegoCloud' },
    ],
  },
  {
    category: 'Databases & storage',
    items: [{ name: 'SQLite' }, { name: 'Hive' }, { name: 'Persistent storage' }, { name: 'Offline-first sync' }],
  },
  {
    category: 'Firebase & services',
    items: [
      { name: 'Cloud Messaging (FCM)' }, { name: 'Firestore' }, { name: 'Realtime Database' },
      { name: 'App Distribution' }, { name: 'Payment gateways' }, { name: 'Google services' },
    ],
  },
  {
    category: 'Hardware',
    items: [{ name: 'Thermal printers · ESC/POS' }, { name: 'Bluetooth printing' }, { name: 'Network printing' }],
  },
  {
    category: 'Performance & debugging',
    items: [{ name: 'Flutter DevTools' }, { name: 'Sentry' }, { name: 'Firebase Crashlytics' }, { name: 'Firebase Analytics' }],
  },
  {
    category: 'CI/CD & tools',
    items: [
      { name: 'GitHub Actions' }, { name: 'Codemagic' }, { name: 'Fastlane' }, { name: 'Git · GitHub · Bitbucket' },
      { name: 'Postman' }, { name: 'Figma' }, { name: 'Jira' }, { name: 'Scrum' },
    ],
  },
  {
    category: 'Mobile security',
    items: [
      { name: 'OWASP MASVS / MASTG' }, { name: 'MobSF' }, { name: 'Frida' },
      { name: 'Burp Suite' }, { name: 'Semgrep' }, { name: 'Snyk' },
    ],
  },
  {
    category: 'AI-assisted workflow',
    items: [{ name: 'Claude Code' }, { name: 'Cursor' }, { name: 'Codex' }, { name: 'ChatGPT' }],
  },
];
