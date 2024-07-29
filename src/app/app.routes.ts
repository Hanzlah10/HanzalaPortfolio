import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'ComingSoon',
        loadChildren: () => import('./coming-soon-page/comingSoon.routes').then(m => m.ComingSoonRoutes)
    },
    {
        path: '', redirectTo: 'ComingSoon', pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'ComingSoon'
    }

];

