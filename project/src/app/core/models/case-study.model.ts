export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  overview: string;
  keyHighlights: string[];
  techStack: string[];
  componentsMentioned?: string[];
  impact?: string;
}
