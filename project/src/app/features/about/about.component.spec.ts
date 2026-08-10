import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create about component', () => {
    expect(component).toBeTruthy();
  });

  it('should render experience summary text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('2 Years');
    expect(compiled.textContent).toContain('Angular-focused frontend developer');
  });

  it('should render 6 feature highlights', () => {
    expect(component.aboutHighlights.length).toBe(6);
  });
});
