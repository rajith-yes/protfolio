import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../core/services/portfolio.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  private portfolioService = inject(PortfolioService);
  personalInfo = this.portfolioService.personalInfo;

  subject = '';
  message = '';

  sendMail(event: Event) {
    event.preventDefault();
    const mailtoUrl = `mailto:${this.personalInfo().email}?subject=${encodeURIComponent(this.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(this.message)}`;
    window.location.href = mailtoUrl;
  }
}
