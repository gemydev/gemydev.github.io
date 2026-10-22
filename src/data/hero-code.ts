import { featuredProjects } from './projects';

export interface CodeFile {
  id: string;
  name: string;
  path: string;
  code: string;
}

// Keep lines under ~46 characters so they fit the hero column without scrolling.
const engineer = `import 'package:flutter/material.dart';

/// Shipping Flutter apps since Oct 2021.
final engineer = FlutterEngineer(
  name: 'Mohamed Gamal',
  role: 'Senior Flutter Developer',
  since: DateTime(2021, 10),
  platforms: const {android, iOS, tablet},
  state: const [Bloc, Cubit, Riverpod],
  strengths: const [
    'performance & profiling',
    'security · OWASP MASVS',
    'offline-first sync',
    'real-time · WebRTC & sockets',
    'ESC/POS thermal printing',
    'CI/CD & store releases',
  ],
);

Future<void> main() async {
  await engineer.ship(yourNextApp);
}
`;

// Generated from the featured projects, so it stays in sync with the Projects section.
const shortName = (name: string) => name.split(' — ')[0];
const shortDomain = (domain: string) => domain.split(' · ')[0];
const projects = `/// Featured apps and their domains.
final shipped = <(String, String)>[
${featuredProjects.map((p) => `  ('${shortName(p.name)}', '${shortDomain(p.domain)}'),`).join('\n')}
];

void main() {
  for (final (app, domain) in shipped) {
    print('$domain → $app');
  }
}
`;

export const heroCode: CodeFile[] = [
  { id: 'engineer', name: 'engineer.dart', path: 'lib/engineer.dart', code: engineer },
  { id: 'projects', name: 'projects.dart', path: 'lib/projects.dart', code: projects },
];
