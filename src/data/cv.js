// ─────────────────────────────────────────────────────────────────────────────
// EDIT THIS FILE to update your CV. Everything the site renders comes from here.
//
// Content sourced from Ricardo's LinkedIn profile + GitHub.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ricardo Calçado',
  title: 'Platforms & Developer Experience Engineer',
  tagline:
    'In a world full of toil, there is a need to automate it. I build automation and tooling that gives developers their time back.',
  about:
    "In a world full of toil, there is a need to automate it — that is one of the things I love. I build automations and code that generate time for developers and myself to do what we like. Whether it's creating modules in Terraform or pipelines in GitHub Actions to accelerate these procedures, that's what I find fun about work — especially when people say they don't lose time anymore on boring procedures.",
  location: 'Lisbon, Portugal',
  email: 'ricardo.calcado10@gmail.com',
  avatar: 'https://avatars.githubusercontent.com/u/38620750?v=4',
  resumeUrl: '', // optional: drop a PDF in /public and set e.g. '/cv-website/Ricardo-Calcado-CV.pdf'
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/paparuco', handle: '@paparuco' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ricardocalcado/', handle: 'ricardocalcado' },
  { label: 'Email', href: 'mailto:ricardo.calcado10@gmail.com', handle: 'ricardo.calcado10@gmail.com' },
]

// Grouped skills — from GitHub tech stack + LinkedIn.
// Each item: { name, icon } where `icon` is a Simple Icons slug (https://simpleicons.org).
// `color` optionally overrides the brand color (use for logos that are near-black,
// so they stay visible on the dark background). Omit `icon` to show no logo.
export const skills = [
  {
    group: 'Core',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'openjdk', color: 'E76F00' }, // openjdk logo is black; use Java orange
      { name: 'Bash', icon: 'gnubash' },
    ],
  },
  {
    group: 'Platform Engineering',
    items: [
      { name: 'Backstage', icon: 'backstage' },
      { name: 'Internal Developer Platform' },
      { name: 'HashiCorp Vault', icon: 'vault' },
      { name: 'SonarQube', icon: 'sonarqubeserver' },
    ],
  },
  {
    group: 'DevOps & IaC',
    items: [
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Terragrunt', icon: 'terraform' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Helm', icon: 'helm', color: '8B9DF0' }, // brand navy is too dark on the dark bg
      { name: 'Argo CD', icon: 'argo' },
    ],
  },
  {
    group: 'Cloud',
    items: [
      { name: 'Google Cloud (GCP)', icon: 'googlecloud' },
      { name: 'Microsoft Azure' }, // Simple Icons dropped the Azure logo (trademark)
    ],
  },
  {
    group: 'CI/CD & Automation',
    items: [
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'Camunda', icon: 'camunda' },
    ],
  },
  {
    group: 'Observability & Data',
    items: [
      { name: 'Grafana', icon: 'grafana' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'SQL Server' }, // Simple Icons dropped the SQL Server logo (trademark)
    ],
  },
  {
    group: 'Tooling',
    items: [
      { name: 'Linux', icon: 'linux', color: 'FCC624' },
      { name: 'WSL' },
      { name: 'VS Code' }, // Simple Icons dropped the VS Code logo (trademark)
      { name: 'GitHub Copilot', icon: 'githubcopilot', color: 'ffffff' },
      { name: 'Claude', icon: 'claude' },
      { name: 'AI Agents' },
    ],
  },
  {
    group: 'Languages',
    items: [
      { name: 'Portuguese (native)' },
      { name: 'English (professional)' },
    ],
  },
]

export const experience = [
  {
    role: 'Platforms Engineer',
    company: 'NOS Inovação',
    period: 'May 2022 — Present',
    location: 'Lisbon, Portugal · Hybrid',
    bullets: [
      'Leveraged Terraform to build an Internal Developer Platform (IdP) that distributes access and self-service infrastructure, empowering developers in their work.',
      'Managed platforms such as SonarQube and HashiCorp Vault, using them to power up developers day-to-day.',
      'Created automations via GitHub Actions to reduce toil and speed up productivity.',
      'Adopted Backstage as a software catalog and built custom plugins for it.',
    ],
  },
  {
    role: 'Cloud Engineer',
    company: 'NOS Inovação',
    period: 'Apr 2021 — May 2022',
    location: 'Lisbon, Portugal · Full-time',
    bullets: [
      'Started my Infrastructure as Code (IaC) journey, using Terraform to manage cloud resources.',
    ],
  },
  {
    role: 'Consultant',
    company: 'Onile IT',
    period: 'Apr 2021 — Present',
    location: 'Full-time',
    bullets: [
      'Engaged as a consultant delivering platform and cloud engineering work (currently at NOS Inovação).',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Randstad (external at Nokia)',
    period: 'Sep 2020 — Apr 2021',
    location: 'Portugal',
    bullets: [
      'Worked as an external developer at Nokia.',
      'Developed Java applications.',
      'Created and developed Kubernetes services using Helm.',
    ],
  },
  {
    role: 'Software Developer Trainee',
    company: 'Nokia',
    period: 'Sep 2019 — Aug 2020',
    location: 'Lisbon Region, Portugal',
    bullets: [
      'Worked on an alarm-based healing program using Java and, later, the Camunda framework to create automations that trigger responses according to received alarms.',
    ],
  },
]

export const education = [
  {
    degree: "Master's degree — Informatics Engineering",
    school: 'Faculdade de Ciências da Universidade de Lisboa (FCUL)',
    period: '2018 — 2022',
  },
  {
    degree: "Bachelor's degree — Informatics Engineering",
    school: 'Faculdade de Ciências da Universidade de Lisboa (FCUL)',
    period: '2014 — 2019',
  },
]

export const certifications = [
  'Google Associate Cloud Engineer (issued Sep 2021)',
]

export const volunteering = [
  {
    role: 'Computer Lab Monitor',
    org: 'Faculdade de Ciências da Universidade de Lisboa',
    period: 'Jul 2019 — Present',
    description: 'Helping run Python labs, teaching the basics of Python to students aged 13–16.',
  },
  {
    role: 'Volunteer',
    org: 'CADI — Computer Science Department Student Committee',
    period: 'Education',
    description: 'Volunteered in various activities such as Jobshop Ciências and Futurália.',
  },
]

// Pulled from your public GitHub repositories.
export const projects = [
  {
    name: 'backstage-test-integrations',
    description: 'Experiments and integrations for Spotify Backstage, the internal developer portal framework.',
    tags: ['Backstage', 'Platform'],
    url: 'https://github.com/paparuco/backstage-test-integrations',
  },
  {
    name: 'rclone-in-docker',
    description: 'rclone packaged with best practices: daily rebuilds, multi-stage builds, non-root, upx, labels, Alpine base.',
    tags: ['Docker', 'Alpine', 'DevOps'],
    url: 'https://github.com/paparuco/rclone-in-docker',
  },
  {
    name: 'content-github-actions-deep-dive',
    description: 'Hands-on lab and lesson work from a GitHub Actions deep-dive course (Python & JavaScript).',
    tags: ['GitHub Actions', 'CI/CD'],
    url: 'https://github.com/paparuco/content-github-actions-deep-dive-lesson',
  },
  {
    name: 'wildfly-quickstart',
    description: 'Versioned docs and samples for the WildFly Java application server.',
    tags: ['Java', 'WildFly'],
    url: 'https://github.com/paparuco/wildfly-quickstart',
  },
]
