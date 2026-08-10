import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create experience component', () => {
    expect(component).toBeTruthy();
  });

  it('should display Yorosis Technologies and Angular UI Developer', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Yorosis Technologies');
    expect(compiled.textContent).toContain('Angular UI Developer');
    expect(compiled.textContent).toContain('June 2024 – August 2026');
  });

  it('should render customer support rotating process section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Customer-Facing Technical Troubleshooting');
    expect(compiled.textContent).toContain('Rotating Developer Support Process');
  });
});
