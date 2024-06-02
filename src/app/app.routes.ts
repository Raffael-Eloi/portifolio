import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HardSkillsComponent } from './hard-skills/hard-skills.component';

export const routes: Routes = [
    {path: '', component: HeaderComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'hard-skills', component: HardSkillsComponent},
];
