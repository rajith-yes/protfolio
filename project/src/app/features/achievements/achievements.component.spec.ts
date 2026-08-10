import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AchievementsComponent } from './achievements.component';

describe('AchievementsComponent', () => {
  let component: AchievementsComponent;
  let fixture: ComponentFixture<AchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create achievements component', () => {
    expect(component).toBeTruthy();
  });

  it('should render 6 achievement metric cards', () => {
    expect(component.achievements().length).toBe(6);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.metric-card').length).toBe(6);
  });

  it('should display confirmed metric values (40%, 35%, 98%, 20%, 85%+, 45%)', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('40%');
    expect(compiled.textContent).toContain('35%');
    expect(compiled.textContent).toContain('98%');
    expect(compiled.textContent).toContain('20%');
    expect(compiled.textContent).toContain('85%+');
    expect(compiled.textContent).toContain('45%');
  });
});
