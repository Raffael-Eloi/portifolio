import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';
import {MatChipsModule} from '@angular/material/chips';
import { hardSkills } from './datasource/hard-skills';
import { HardSkillCategory } from './enums/hard-skill-category';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hard-skills',
  standalone: true,
  imports: [MatChipsModule, CdkDropList, CdkDrag, NgFor],
  templateUrl: './hard-skills.component.html',
  styleUrl: './hard-skills.component.css'
})
export class HardSkillsComponent {
  backendSkills = hardSkills.filter(hardSkill => hardSkill.category == HardSkillCategory.Backend);
  frontendSkills = hardSkills.filter(hardSkill => hardSkill.category == HardSkillCategory.Frontend);
  testingSkills = hardSkills.filter(hardSkill => hardSkill.category == HardSkillCategory.Testing);
  databaseSkills = hardSkills.filter(hardSkill => hardSkill.category == HardSkillCategory.Database);
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(hardSkills, event.previousIndex, event.currentIndex);
  }
}