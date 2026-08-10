export interface WorkExperience {
  role: string;
  company: string;
  duration: string;
  location: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  customerSupportExperience: {
    description: string;
    channels: string[];
    valueProposition: string;
  };
}
