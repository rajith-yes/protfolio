import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@Component({
  template: `<div [appScrollReveal]="'fade-up'" [delay]="100" id="test-el">Test Content</div>`,
  standalone: true,
  imports: [ScrollRevealDirective]
})
class TestHostComponent {}

describe('ScrollRevealDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, ScrollRevealDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create an instance and apply reveal classes', () => {
    const el = fixture.nativeElement.querySelector('#test-el') as HTMLElement;
    expect(el).toBeTruthy();
    expect(el.classList.contains('reveal')).toBe(true);
    expect(el.classList.contains('reveal-fade-up')).toBe(true);
  });
});
