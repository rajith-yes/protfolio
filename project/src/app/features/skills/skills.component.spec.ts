import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create skills component', () => {
    expect(component).toBeTruthy();
  });

  it('should render 9 skill categories', () => {
    expect(component.categories().length).toBe(9);
  });

  it('should include Angular 12-Latest in Frontend Core category', () => {
    const frontendCategory = component.categories().find(c => c.title === 'Frontend Core');
    expect(frontendCategory).toBeTruthy();
    expect(frontendCategory?.skills).toContain('Angular 12–Latest');
  });
});
