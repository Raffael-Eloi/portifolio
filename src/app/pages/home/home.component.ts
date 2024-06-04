import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { WorkExperiencesComponent } from '../../components/work-experiences/work-experiences.component';
import { EducationComponent } from '../../components/education/education.component';
import { HardSkillsComponent } from '../../components/hard-skills/hard-skills.component';
import { IntroductionComponent } from '../../components/introduction/introduction.component';
import { OffTopicComponent } from '../../components/off-topic/off-topic.component';

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