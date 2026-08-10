export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  availability: string;
  languages: { language: string; proficiency: string }[];
}
