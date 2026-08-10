import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillBadgeComponent } from './skill-badge.component';

describe('SkillBadgeComponent', () => {
  let component: SkillBadgeComponent;
  let fixture: ComponentFixture<SkillBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillBadgeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillBadgeComponent);
    component = fixture.componentInstance;
  });

  it('should create skill badge component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display skill name correctly', () => {
    component.name = 'Angular 21';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.skill-name')?.textContent).toBe('Angular 21');
  });
});
