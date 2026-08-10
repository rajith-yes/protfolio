import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseStudiesComponent } from './case-studies.component';

describe('CaseStudiesComponent', () => {
  let component: CaseStudiesComponent;
  let fixture: ComponentFixture<CaseStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseStudiesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create case studies component', () => {
    expect(component).toBeTruthy();
  });

  it('should render 5 professional case studies', () => {
    expect(component.caseStudies().length).toBe(5);
  });

  it('should display yoro-table, yoro-card, and yoro-button component library case study', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('yoro-table');
    expect(compiled.textContent).toContain('yoro-card');
    expect(compiled.textContent).toContain('yoro-button');
  });
});
