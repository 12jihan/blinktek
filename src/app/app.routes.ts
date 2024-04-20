import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/landing'},
    { path: 'landing', component: LandingPageComponent },
];
