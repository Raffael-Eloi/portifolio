import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HardSkillsComponent } from './hard-skills.component';

describe('HardSkillsComponent should', () => {
  let component: HardSkillsComponent;
  let fixture: ComponentFixture<HardSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardSkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HardSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });
  
  it('create backend section with title', () => {
    const renderedComponent = fixture.nativeElement as HTMLElement;
    expect(renderedComponent.querySelector('h3')?.textContent).toContain('Backend');
  });
});