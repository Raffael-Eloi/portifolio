import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationComponent } from './education.component';
import { educations } from './datasource/educations';

describe('EducationComponent should', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('have education type', () => {
    // Arrange
    
    // Act
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const renderedComponentText = renderedComponent.innerText;

    // Assert
    expect(renderedComponentText).toContain("Bachelor");
    expect(renderedComponentText).toContain("Post Graduation");
  });
  
  it('have subject', () => {
    // Arrange
    const education = educations.at(0);
    
    // Act
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const renderedComponentText = renderedComponent.innerText;

    // Assert
    expect(renderedComponentText).toContain(education!.subject);
  });
  
  it('have institution', () => {
    // Arrange
    const education = educations.at(0);
    
    // Act
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const renderedComponentText = renderedComponent.innerText;

    // Assert
    expect(renderedComponentText).toContain(education!.institution);
  });
  
  it('have institution link', () => {
    // Arrange
    const education = educations.at(0);
    
    // Act
    const renderedComponent = fixture.nativeElement as HTMLElement;
    
    // Assert
    const link = renderedComponent.querySelector("a");
    expect(link?.href).toBe(education!.institutionLink);
  });
  
  it('have start date', () => {
    // Arrange
    const education = educations.at(0);
    
    // Act
    const renderedComponent = fixture.nativeElement as HTMLElement;
    const renderedComponentText = renderedComponent.innerText;
    
    // Assert
    expect(renderedComponentText).toContain(education!.startDate.toLocaleDateString());
  });
});