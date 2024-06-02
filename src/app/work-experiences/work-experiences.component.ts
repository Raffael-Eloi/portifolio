import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { workExperiences } from './datasource/work-experiences';
import { NgFor } from '@angular/common';
import { WorkExperience } from './models/work-experience';

@Component({
  selector: 'app-work-experiences',
  standalone: true,
  imports: [ MatExpansionModule, NgFor ],
  templateUrl: './work-experiences.component.html',
  styleUrl: './work-experiences.component.css'
})
export class WorkExperiencesComponent {
  workExperiences: WorkExperience[];
  panelOpenState: boolean;

  constructor() {
    this.workExperiences = workExperiences;
    this.panelOpenState = false;
  }
}