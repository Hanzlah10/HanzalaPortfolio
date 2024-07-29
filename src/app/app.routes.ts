import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./coming-soon-page/comingSoon.routes').then(m => m.ComingSoonRoutes)
    }
];
