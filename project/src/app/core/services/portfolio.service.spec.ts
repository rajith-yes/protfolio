import { TestBed } from '@angular/core/testing';
import { PortfolioService } from './portfolio.service';

describe('PortfolioService', () => {
  let service: PortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return personal info with name RAJITH S', () => {
    const info = service.getPersonalInfo();
    expect(info.name).toBe('RAJITH S');
    expect(info.title).toContain('Angular Specialist');
  });

  it('should return work experience at Yorosis Technologies', () => {
    const exp = service.getWorkExperience();
    expect(exp.company).toBe('Yorosis Technologies');
    expect(exp.role).toBe('Angular UI Developer');
  });

  it('should return 6 achievements with exact confirmed metrics', () => {
    const achievements = service.getAchievements();
    expect(achievements.length).toBe(6);
    const metrics = achievements.map(a => a.metric);
    expect(metrics).toContain('40%');
    expect(metrics).toContain('35%');
    expect(metrics).toContain('98%');
    expect(metrics).toContain('20%');
    expect(metrics).toContain('85%+');
    expect(metrics).toContain('45%');
  });

  it('should return featured project Task Management System', () => {
    const project = service.getFeaturedProject();
    expect(project.title).toBe('Task Management System');
    expect(project.technologies).toContain('Angular');
    expect(project.deploymentPlatform).toBe('Vercel');
  });
});
