import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-off-topic',
  standalone: true,
  imports: [ MatGridListModule ],
  templateUrl: './off-topic.component.html',
  styleUrl: './off-topic.component.css'
})
export class OffTopicComponent {

}