import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-work-experiences',
  standalone: true,
  imports: [ MatExpansionModule ],
  templateUrl: './work-experiences.component.html',
  styleUrl: './work-experiences.component.css'
})
export class WorkExperiencesComponent {
  panelOpenState = false;
}
