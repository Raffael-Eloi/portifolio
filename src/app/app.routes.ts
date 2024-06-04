import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HardSkillsComponent } from './hard-skills/hard-skills.component';
import { WorkExperiencesComponent } from './work-experiences/work-experiences.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'hard-skills', component: HardSkillsComponent},
    {path: 'work-expeciences', component: WorkExperiencesComponent},
    {path: 'education', component: EducationComponent},
];
