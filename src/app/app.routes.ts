import { Routes } from '@angular/router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';

export const routes: Routes = [
    {
        path: 'home', component: LandingpageComponent
    },
    {
        path: '**', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home-lazy-load', loadComponent: () => import('./pages/landingpage/landingpage.component').then(mod => mod.LandingpageComponent),
    }
];
