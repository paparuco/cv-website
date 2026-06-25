// Bundled brand icons from the `simple-icons` package.
// Only the icons imported here are included in the build (tree-shaken),
// so the bundle stays small and nothing is fetched from a CDN at runtime.
//
// To add a new skill icon: find its slug on https://simpleicons.org, import the
// matching `si<Slug>` export below, and add it to the map keyed by that slug
// (the same slug string you use in src/data/cv.js).
import {
  siPython,
  siOpenjdk,
  siGnubash,
  siBackstage,
  siVault,
  siSonarqubeserver,
  siTerraform,
  siDocker,
  siKubernetes,
  siHelm,
  siArgo,
  siGooglecloud,
  siGithubactions,
  siCamunda,
  siGrafana,
  siPostgresql,
  siLinux,
  siGithubcopilot,
  siClaude,
  siGithub,
  siGmail,
} from 'simple-icons'

// LinkedIn's logo was removed from Simple Icons (trademark), so its glyph path
// is inlined here. Each social entry just needs a `path`.
const linkedinPath =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z'

// Social icons keyed by the social label used in src/data/cv.js.
export const socialIcons = {
  GitHub: siGithub,
  LinkedIn: { path: linkedinPath },
  Email: siGmail,
}

export const iconMap = {
  python: siPython,
  openjdk: siOpenjdk,
  gnubash: siGnubash,
  backstage: siBackstage,
  vault: siVault,
  sonarqubeserver: siSonarqubeserver,
  terraform: siTerraform,
  docker: siDocker,
  kubernetes: siKubernetes,
  helm: siHelm,
  argo: siArgo,
  googlecloud: siGooglecloud,
  githubactions: siGithubactions,
  camunda: siCamunda,
  grafana: siGrafana,
  postgresql: siPostgresql,
  linux: siLinux,
  githubcopilot: siGithubcopilot,
  claude: siClaude,
}
