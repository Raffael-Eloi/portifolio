import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HardSkillsComponent } from './hard-skills.component';
import { hardSkills } from './datasource/hard-skills';
import { HardSkillCategory } from './enums/hard-skill-category';

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
    const titles = renderedComponent.querySelectorAll('h3');

    let hasBackendTitle = false;
    titles.forEach(title => {
        if (title.textContent == "Backend")
          hasBackendTitle = true;
    });
    expect(hasBackendTitle).toBeTruthy();
  });

  it('create backend section with hard skills', () => {
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const renderedComponentText = renderedComponent.innerText;

    const backendSkills = hardSkills.filter(hardSkill => hardSkill.category == HardSkillCategory.Backend);
    backendSkills.forEach(hardSkill => {
      expect(renderedComponentText).toContain(hardSkill.name);
    });
  });

  it('create frontend section with title', () => {
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const titles = renderedComponent.querySelectorAll('h3');
    
    let hasFrontendTitle = false;
    titles.forEach(title => {
        if (title.textContent == "Frontend")
          hasFrontendTitle = true;
    });
    expect(hasFrontendTitle).toBeTruthy();
  });

  it('create frontend section with hard skills', () => {
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const renderedComponentText = renderedComponent.innerText;

    const frontendSkills = hardSkills.filter(hardSkill => hardSkill.category == HardSkillCategory.Frontend);
    frontendSkills.forEach(hardSkill => {
      expect(renderedComponentText).toContain(hardSkill.name);
    });
  });

  it('create testing section with title', () => {
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const titles = renderedComponent.querySelectorAll('h3');
    
    let hasTestingTitle = false;
    titles.forEach(title => {
        if (title.textContent == "Testing")
          hasTestingTitle = true;
    });
    expect(hasTestingTitle).toBeTruthy();
  });

  it('create testing section with hard skills', () => {
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const renderedComponentText = renderedComponent.innerText;

    const testingSkills = hardSkills.filter(hardSkill => hardSkill.category == HardSkillCategory.Testing);
    testingSkills.forEach(hardSkill => {
      expect(renderedComponentText).toContain(hardSkill.name);
    });
  });

  it('create database section with title', () => {
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const titles = renderedComponent.querySelectorAll('h3');
    
    let hasDatabaseTitle = false;
    titles.forEach(title => {
        if (title.textContent == "Database")
          hasDatabaseTitle = true;
    });
    expect(hasDatabaseTitle).toBeTruthy();
  });

  it('create database section with hard skills', () => {
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const renderedComponentText = renderedComponent.innerText;

    const databaseSkills = hardSkills.filter(hardSkill => hardSkill.category == HardSkillCategory.Database);
    databaseSkills.forEach(hardSkill => {
      expect(renderedComponentText).toContain(hardSkill.name);
    });
  });
  
  it('create devops section with title', () => {
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const titles = renderedComponent.querySelectorAll('h3');
    
    let hasdevopsTitle = false;
    titles.forEach(title => {
        if (title.textContent == "DevOps")
          hasdevopsTitle = true;
    });
    expect(hasdevopsTitle).toBeTruthy();
  });

  it('create devops section with hard skills', () => {
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const renderedComponentText = renderedComponent.innerText;

    const devopsSkills = hardSkills.filter(hardSkill => hardSkill.category == HardSkillCategory.DevOps);
    devopsSkills.forEach(hardSkill => {
      expect(renderedComponentText).toContain(hardSkill.name);
    });
  });
  
  it('create architecture section with title', () => {
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const titles = renderedComponent.querySelectorAll('h3');
    
    let hasArchitectureTitle = false;
    titles.forEach(title => {
        if (title.textContent == "Architecture")
          hasArchitectureTitle = true;
    });
    expect(hasArchitectureTitle).toBeTruthy();
  });

  it('create architecture section with hard skills', () => {
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const renderedComponentText = renderedComponent.innerText;

    const architectureSkills = hardSkills.filter(hardSkill => hardSkill.category == HardSkillCategory.Architecture);
    architectureSkills.forEach(hardSkill => {
      expect(renderedComponentText).toContain(hardSkill.name);
    });
  });

  it('create engineering concepts section with title', () => {
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const titles = renderedComponent.querySelectorAll('h3');
    
    let hasEngineeringConceptsTitle = false;
    titles.forEach(title => {
        if (title.textContent == "Engineering Concepts")
          hasEngineeringConceptsTitle = true;
    });
    expect(hasEngineeringConceptsTitle).toBeTruthy();
  });

  it('create engineering concepts section with hard skills', () => {
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const renderedComponentText = renderedComponent.innerText;

    const engineeringConceptsSkills = hardSkills.filter(hardSkill => hardSkill.category == HardSkillCategory.EngineeringConcepts);
    engineeringConceptsSkills.forEach(hardSkill => {
      expect(renderedComponentText).toContain(hardSkill.name);
    });
  });
});