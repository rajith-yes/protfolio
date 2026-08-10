import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create hero component', () => {
    expect(component).toBeTruthy();
  });

  it('should render RAJITH S name and title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero-name')?.textContent).toContain('RAJITH S');
    expect(compiled.querySelector('.hero-title')?.textContent).toContain('Frontend Developer | Angular Specialist');
  });

  it('should render View My Work CTA button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const btn = compiled.querySelector('a.btn-primary-cyan');
    expect(btn?.textContent).toContain('View My Work');
  });
});
