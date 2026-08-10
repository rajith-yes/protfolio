import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent {
  @Input() badge: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() centered: boolean = true;
}
