import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { WorkExperiencesComponent } from '../work-experiences/work-experiences.component';
import { EducationComponent } from '../education/education.component';
import { HardSkillsComponent } from '../hard-skills/hard-skills.component';
import { IntroductionComponent } from '../introduction/introduction.component';
import { OffTopicComponent } from '../off-topic/off-topic.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    HeaderComponent,
    IntroductionComponent,
    WorkExperiencesComponent, 
    EducationComponent, 
    HardSkillsComponent,
    OffTopicComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}