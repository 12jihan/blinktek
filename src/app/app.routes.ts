import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
    { path: 'landing', component: LandingPageComponent },
    { path: '', pathMatch: 'full', redirectTo: '/landing'},
];
