export interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  deploymentPlatform: string;
  database: string;
  githubUrl?: string;
  liveUrl?: string;
}
