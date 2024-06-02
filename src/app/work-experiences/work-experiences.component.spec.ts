import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkExperiencesComponent } from './work-experiences.component';
import { workExperiences } from './datasource/work-experiences';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('WorkExperiencesComponent should', () => {
  let component: WorkExperiencesComponent;
  let fixture: ComponentFixture<WorkExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExperiencesComponent, BrowserAnimationsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('have company name', () => {
    // Arrange
    const workExperience = workExperiences[0];
    
    // Act
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const renderedComponentText = renderedComponent.innerText;

    // Assert
    expect(renderedComponentText).toContain(workExperience?.companyName);
  });
  
  it('have position', () => {
    // Arrange
    const workExperience = workExperiences[0];
    
    // Act
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const renderedComponentText = renderedComponent.innerText;

    // Assert
    expect(renderedComponentText).toContain(workExperience?.position);
  });
  
  it('have activies description', () => {
    // Arrange
    const workExperience = workExperiences[0];
    
    // Act
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const renderedComponentText = renderedComponent.innerHTML;

    // Assert
    workExperience.activitiesDescription.forEach(activity => {
      expect(renderedComponentText).toContain(activity);
    });
  });
  
  it('have start date', () => {
    // Arrange
    const workExperience = workExperiences[0];
    
    // Act
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const renderedComponentText = renderedComponent.innerHTML;

    // Assert
    expect(renderedComponentText).toContain(workExperience?.startDate.toLocaleDateString());
  });
  
  it('have finish date', () => {
    // Arrange
    const workExperience = workExperiences[1];
    
    // Act
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const renderedComponentText = renderedComponent.innerHTML;

    // Assert
    const finishDate = workExperience?.finishDate?.toLocaleDateString();
    const expectedFinishDate = `- ${finishDate!}`;
    expect(renderedComponentText).toContain(expectedFinishDate);
  });
});