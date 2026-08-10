import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationComponent } from './education.component';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create education component', () => {
    expect(component).toBeTruthy();
  });

  it('should render Bachelor of Engineering and Diploma entries', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Bachelor of Engineering');
    expect(compiled.textContent).toContain('University College of Engineering, Nagercoil');
    expect(compiled.textContent).toContain('Diploma');
    expect(compiled.textContent).toContain('N.M.S. Kamaraj Polytechnic College');
  });

  it('should render languages Tamil and English', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Tamil');
    expect(compiled.textContent).toContain('English');
  });
});
