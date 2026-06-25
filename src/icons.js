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
} from 'simple-icons'

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
