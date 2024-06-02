import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';
import {MatChipsModule} from '@angular/material/chips';
import { hardSkills } from './datasource/hard-skills';

@Component({
  selector: 'app-hard-skills',
  standalone: true,
  imports: [MatChipsModule, CdkDropList, CdkDrag],
  templateUrl: './hard-skills.component.html',
  styleUrl: './hard-skills.component.css'
})
export class HardSkillsComponent {
  hardSkills = hardSkills;
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(hardSkills, event.previousIndex, event.currentIndex);
  }
}