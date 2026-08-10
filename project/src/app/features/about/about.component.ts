import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  private portfolioService = inject(PortfolioService);
  personalInfo = this.portfolioService.personalInfo;

  aboutHighlights = [
    {
      title: 'Angular Specialization',
      description: '2 years of professional experience building single-page applications with Angular (12-latest), TypeScript, RxJS, and Angular Signals.',
      icon: 'bi-box'
    },
    {
      title: 'REST API & Webhooks',
      description: 'Expertise in HTTP Client, HTTP Interceptors for error handling/auth headers, Route Guards, and webhook event-driven integration.',
      icon: 'bi-cloud-check'
    },
    {
      title: 'Custom Component Libraries',
      description: 'Built reusable, standardized UI component suites (yoro-table, yoro-card, yoro-button) to streamline development and Angular migrations.',
      icon: 'bi-layers'
    },
    {
      title: 'Performance & Optimization',
      description: 'Achieved 40% application load time reduction and 45% bundle reduction via lazy loading, tree shaking, and code splitting.',
      icon: 'bi-speedometer2'
    },
    {
      title: 'Backend Collaboration',
      description: 'Collaborated alongside backend developers working with Spring Boot, Node.js, and MySQL for robust API contracts.',
      icon: 'bi-diagram-2'
    },
    {
      title: 'Customer-Facing Support',
      description: 'Handled customer queries in rotating developer support schedules across phone, email, WhatsApp, and meeting channels.',
      icon: 'bi-headset'
    }
  ];
}
