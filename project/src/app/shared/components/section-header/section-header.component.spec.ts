import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionHeaderComponent } from './section-header.component';

describe('SectionHeaderComponent', () => {
  let component: SectionHeaderComponent;
  let fixture: ComponentFixture<SectionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SectionHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create section header component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render title and badge when provided', () => {
    component.title = 'Test Section';
    component.badge = 'Test Badge';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.section-title')?.textContent).toContain('Test Section');
    expect(compiled.querySelector('.badge-tag')?.textContent).toContain('Test Badge');
  });
});
