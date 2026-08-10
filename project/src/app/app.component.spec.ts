import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the main app component', () => {
    expect(component).toBeTruthy();
  });

  it('should have title RAJITH S Portfolio', () => {
    expect(component.title).toBe('RAJITH S Portfolio');
  });

  it('should render all portfolio sections in main container', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-navbar')).toBeTruthy();
    expect(compiled.querySelector('app-hero')).toBeTruthy();
    expect(compiled.querySelector('app-about')).toBeTruthy();
    expect(compiled.querySelector('app-skills')).toBeTruthy();
    expect(compiled.querySelector('app-experience')).toBeTruthy();
    expect(compiled.querySelector('app-achievements')).toBeTruthy();
    expect(compiled.querySelector('app-case-studies')).toBeTruthy();
    expect(compiled.querySelector('app-projects')).toBeTruthy();
    expect(compiled.querySelector('app-development-approach')).toBeTruthy();
    expect(compiled.querySelector('app-education')).toBeTruthy();
    expect(compiled.querySelector('app-contact')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });
});
