import { Injectable, signal } from '@angular/core';
import { PersonalInfo } from '../models/contact.model';
import { WorkExperience } from '../models/experience.model';
import { SkillCategory } from '../models/skill.model';
import { Achievement } from '../models/achievement.model';
import { CaseStudy } from '../models/case-study.model';
import { Project } from '../models/project.model';
import { Education } from '../models/education.model';
import {
  PERSONAL_INFO,
  WORK_EXPERIENCE,
  SKILL_CATEGORIES,
  ACHIEVEMENTS,
  CASE_STUDIES,
  FEATURED_PROJECT,
  EDUCATION_LIST
} from '../constants/portfolio-data';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  readonly personalInfo = signal<PersonalInfo>(PERSONAL_INFO);
  readonly workExperience = signal<WorkExperience>(WORK_EXPERIENCE);
  readonly skillCategories = signal<SkillCategory[]>(SKILL_CATEGORIES);
  readonly achievements = signal<Achievement[]>(ACHIEVEMENTS);
  readonly caseStudies = signal<CaseStudy[]>(CASE_STUDIES);
  readonly featuredProject = signal<Project>(FEATURED_PROJECT);
  readonly educationList = signal<Education[]>(EDUCATION_LIST);

  getPersonalInfo(): PersonalInfo {
    return this.personalInfo();
  }

  getWorkExperience(): WorkExperience {
    return this.workExperience();
  }

  getSkillCategories(): SkillCategory[] {
    return this.skillCategories();
  }

  getAchievements(): Achievement[] {
    return this.achievements();
  }

  getCaseStudies(): CaseStudy[] {
    return this.caseStudies();
  }

  getFeaturedProject(): Project {
    return this.featuredProject();
  }

  getEducationList(): Education[] {
    return this.educationList();
  }
}
