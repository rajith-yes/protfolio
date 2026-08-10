import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { SkillBadgeComponent } from '../../shared/components/skill-badge/skill-badge.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, SkillBadgeComponent, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  private portfolioService = inject(PortfolioService);
  categories = this.portfolioService.skillCategories;
}
