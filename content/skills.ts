import { experience } from './experience';
import { projects } from './projects';
import type { Localized } from './types';

/**
 * Skills are DERIVED from the work wherever possible, so the list cannot drift
 * out of sync the way a hand-maintained one does. Every tech tag on a project
 * flows in automatically; `additional` carries the résumé-only entries that no
 * project tag happens to mention.
 */

export type SkillGroup = 'ai' | 'software' | 'tools';

/**
 * The same technology written two ways across the content collapses to one
 * name. Without this, deriving from project tags lists "React" and "React.js"
 * as if they were different things.
 */
const ALIASES: Record<string, string> = {
  'React.js': 'React',
  'Node.js': 'Node',
  'Express.js': 'Express',
  'Three.js': 'Three.js',
  'Deep Reinforcement Learning': 'Deep Reinforcement Learning',
  'Reinforcement Learning': 'Deep Reinforcement Learning',
  'Raspberry Pi 4': 'Raspberry Pi',
  'Raspberry Pi 5': 'Raspberry Pi',
};

const canonical = (name: string) => ALIASES[name] ?? name;

const GROUP_OF: Record<string, SkillGroup> = {
  // AI & ML
  PyTorch: 'ai',
  TensorFlow: 'ai',
  Keras: 'ai',
  'Scikit-Learn': 'ai',
  'Deep Reinforcement Learning': 'ai',
  'Reinforcement Learning': 'ai',
  'Deep Learning': 'ai',
  'Computer Vision': 'ai',
  OpenCV: 'ai',
  CNN: 'ai',
  YOLOv8: 'ai',
  RAG: 'ai',
  CatBoost: 'ai',
  XGBoost: 'ai',
  CrewAI: 'ai',
  NumPy: 'ai',
  Pandas: 'ai',
  Matplotlib: 'ai',
  'Frugal AI': 'ai',
  Qdrant: 'ai',
  Stockfish: 'ai',

  // Software development
  'React.js': 'software',
  React: 'software',
  'Node.js': 'software',
  'Express.js': 'software',
  Django: 'software',
  FastAPI: 'software',
  NestJS: 'software',
  PHP: 'software',
  Symfony: 'software',
  Java: 'software',
  JavaScript: 'software',
  TypeScript: 'software',
  Python: 'software',
  HTML: 'software',
  CSS: 'software',
  TailwindCSS: 'software',
  Bootstrap: 'software',
  MongoDB: 'software',
  PostgreSQL: 'software',
  Redis: 'software',
  'Oracle SQL': 'software',
  'Socket.io': 'software',
  'Three.js': 'software',
  'D3.js': 'software',
  'Chart.js': 'software',
  'Dynamic Programming': 'software',
  'Distributed Systems': 'software',

  // Tools, platforms, systems
  Docker: 'tools',
  Git: 'tools',
  GitHub: 'tools',
  Linux: 'tools',
  Jira: 'tools',
  'SAP Joule': 'tools',
  Kibana: 'tools',
  RabbitMQ: 'tools',
  Zeek: 'tools',
  openArgus: 'tools',
  'Raspberry Pi 4': 'tools',
  'Raspberry Pi 5': 'tools',
  Arduino: 'tools',
  'C++': 'tools',
  C: 'tools',
  IoT: 'tools',
  'Edge Computing': 'tools',
  // Added 2026-09-09 with the SISP and edge-AI work.
  'SVD Anomaly Detection': 'ai',
  'Kalman Filtering': 'ai',
  'Embedded ML': 'ai',
  'TensorFlow Lite': 'ai',
  'Protocol Design': 'software',
  'Link Budget Modelling': 'software',
  'MQTT': 'software',
  'ESP32': 'tools',
  'Data Analytics': 'tools',
  SEO: 'tools',
};

/**
 * Résumé and site entries that no project tag happens to carry. Anything
 * appearing in a project's `tech` does not belong here — it arrives on its own.
 */
const additional: readonly string[] = [
  'TensorFlow',
  'Keras',
  'Scikit-Learn',
  'CNN',
  'NumPy',
  'Pandas',
  'Matplotlib',
  'OpenCV',
  'Git',
  'GitHub',
  'Linux',
  'Bootstrap',
  'Oracle SQL',
  'C',
  'C++',
  'Raspberry Pi 5',
  'SEO',
];

export const SKILL_GROUP_LABELS: Record<SkillGroup, Localized> = {
  ai: { en: 'AI & Machine Learning', fr: 'IA & Apprentissage automatique' },
  software: { en: 'Software Development', fr: 'Développement logiciel' },
  tools: { en: 'Tools & Systems', fr: 'Outils & Systèmes' },
};

function collect(): Record<SkillGroup, string[]> {
  const seen = new Set<string>();
  const grouped: Record<SkillGroup, string[]> = { ai: [], software: [], tools: [] };

  const add = (raw: string) => {
    const name = canonical(raw.trim());
    if (!name || seen.has(name)) return;
    // Look the group up under both the canonical and the written form, so an
    // alias never needs its own GROUP_OF entry.
    const group = GROUP_OF[name] ?? GROUP_OF[raw.trim()];
    // An unmapped tag is intentionally dropped rather than guessed into a
    // group. Add it to GROUP_OF to surface it.
    if (!group) return;
    seen.add(name);
    grouped[group].push(name);
  };

  for (const project of projects) project.tech.forEach(add);
  // Role tags are localized marketing phrases ("Full-Stack Web Development"),
  // not tool names, so only the ones explicitly mapped are taken.
  for (const role of experience) role.tags.en.forEach(add);
  additional.forEach(add);

  for (const key of Object.keys(grouped) as SkillGroup[]) {
    grouped[key].sort((a, b) => a.localeCompare(b));
  }
  return grouped;
}

export const skills = collect();

/** Tags present in the content but not yet mapped to a group, so nothing is silently dropped. */
export const unmappedTech: readonly string[] = Array.from(
  new Set(
    projects
      .flatMap((p) => p.tech)
      .filter((tag) => !GROUP_OF[canonical(tag)] && !GROUP_OF[tag]),
  ),
);
