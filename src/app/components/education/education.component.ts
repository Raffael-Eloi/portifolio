import { Component } from '@angular/core';
import { Education } from './models/education';
import { educations } from './datasource/educations';
import { MatTableModule } from '@angular/material/table';
import { EducationType } from './enums/education-type';
import { IGetEducationTypeName } from './contracts/i-get-education-type-name';
import GetEducationTypeName from './services/get-education-type-name';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [ MatTableModule ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  getEducationTypeName: IGetEducationTypeName;
  educations: Education[];
  displayedColumns: string[];

  constructor() {
    this.getEducationTypeName = new GetEducationTypeName();
    this.educations = educations;
    this.displayedColumns = ['type', 'subject', 'institution', 'startDate', 'finishDate'];
  }

  getTypeName(type: EducationType) {
    return this.getEducationTypeName.get(type);
  }
}