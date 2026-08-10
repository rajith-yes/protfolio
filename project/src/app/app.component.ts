import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { AchievementsComponent } from './features/achievements/achievements.component';
import { CaseStudiesComponent } from './features/case-studies/case-studies.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { DevelopmentApproachComponent } from './features/development-approach/development-approach.component';
import { EducationComponent } from './features/education/education.component';
import { ContactComponent } from './features/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    AchievementsComponent,
    CaseStudiesComponent,
    ProjectsComponent,
    DevelopmentApproachComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RAJITH S Portfolio';
}
