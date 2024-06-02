import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {path: '', component: HeaderComponent},
    {path: 'header', component: HeaderComponent},
];
