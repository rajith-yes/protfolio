export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface SkillGroup {
  frontend: SkillCategory;
  uiStyling: SkillCategory;
  apiIntegration: SkillCategory;
  stateManagement: SkillCategory;
  testing: SkillCategory;
  performance: SkillCategory;
  tools: SkillCategory;
  cicd: SkillCategory;
  practices: SkillCategory;
}
