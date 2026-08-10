import { Directive, ElementRef, Input, OnInit, OnDestroy, inject, Attribute } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input('appScrollReveal') animationType: string = 'fade-up';
  @Input() delay: number = 0; // Delay in ms

  private el = inject(ElementRef);
  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    const target = this.el.nativeElement as HTMLElement;
    target.classList.add('reveal', `reveal-${this.animationType || 'fade-up'}`);

    if (this.delay > 0) {
      target.style.transitionDelay = `${this.delay}ms`;
    }

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            target.classList.add('reveal-active');
            this.observer?.unobserve(target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });

      this.observer.observe(target);
    } else {
      // Fallback for SSR or non-supported browsers
      target.classList.add('reveal-active');
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
