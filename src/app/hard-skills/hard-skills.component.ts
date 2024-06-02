import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';
import {MatChipsModule} from '@angular/material/chips';
import { hardSkills } from './datasource/hard-skills';
import { NgFor } from '@angular/common';
import IGetCategoryName from './contracts/i-get-category-name';
import GetCategoryName from './services/get-category-name';
import { HardSkillsByCategory } from './models/hard-skills-by-category';
import { HardSkill } from './models/hard-skill';

@Component({
  selector: 'app-hard-skills',
  standalone: true,
  imports: [MatChipsModule, CdkDropList, CdkDrag, NgFor],
  templateUrl: './hard-skills.component.html',
  styleUrl: './hard-skills.component.css'
})
export class HardSkillsComponent { 
  getCategoryName: IGetCategoryName;
  hardSkillsByCategory: HardSkillsByCategory;
  categories: string[] = [];
  
  constructor() {
    this.getCategoryName = new GetCategoryName();
    this.hardSkillsByCategory = {};
    
    this.initializeHardSkills();
    
    this.initializeCategories();
  }

  initializeHardSkills() {
    hardSkills.forEach(hardSkill => {
      if (this.CategoryWasNotInitialized(hardSkill)) 
        this.hardSkillsByCategory[hardSkill.category] = [];

      this.AddHardSkill(hardSkill);
    });
  }

  private CategoryWasNotInitialized(hardSkill: HardSkill) {
    return !this.hardSkillsByCategory[hardSkill.category];
  }

  private AddHardSkill(hardSkill: HardSkill) {
    this.hardSkillsByCategory[hardSkill.category].push(hardSkill);
  }

  private initializeCategories() {
    this.categories = Object.keys(this.hardSkillsByCategory);
  }

  getName(category: string): string {
    return this.getCategoryName.get(Number(category));
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(hardSkills, event.previousIndex, event.currentIndex);
  }
}