import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';
import {MatChipsModule} from '@angular/material/chips';

export interface HardSkill {
  name: string
}

@Component({
  selector: 'app-hard-skills',
  standalone: true,
  imports: [MatChipsModule, CdkDropList, CdkDrag],
  templateUrl: './hard-skills.component.html',
  styleUrl: './hard-skills.component.css'
})
export class HardSkillsComponent {
  hardSkills: HardSkill[] = [
    { name: 'C#'},
    { name: '.NET'}
  ];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.hardSkills, event.previousIndex, event.currentIndex);
  }
}