import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-development-approach',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './development-approach.component.html',
  styleUrls: ['./development-approach.component.css']
})
export class DevelopmentApproachComponent {
  practices = [
    {
      title: 'Agile & Scrum Practices',
      icon: 'bi-kanban',
      items: [
        'Active participation in daily stand-ups and sprint planning.',
        'Sprint backlog grooming and team retrospectives.',
        'JIRA issue tracking and task estimation.'
      ]
    },
    {
      title: 'Code Reviews & Standards',
      icon: 'bi-git',
      items: [
        'Feature branch workflow & pull request reviews.',
        'Enforcing consistent component architecture & DRY principles.',
        'Standardized styling with Bootstrap and custom design tokens.'
      ]
    },
    {
      title: 'Automated Testing & QA',
      icon: 'bi-check-all',
      items: [
        'Jest unit testing for Angular components and services.',
        'Integration testing for API data flows and state changes.',
        'Maintaining high test coverage (85%+ target).'
      ]
    },
    {
      title: 'CI/CD & DevOps Awareness',
      icon: 'bi-cpu',
      items: [
        'GitHub Actions & Jenkins pipeline integration.',
        'Docker containerization environment awareness.',
        'Production bundle size and load time optimization.'
      ]
    }
  ];
}
