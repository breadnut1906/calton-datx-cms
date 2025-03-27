import { Routes } from '@angular/router';
import { authGuard, loginGuard } from './core/guards/auth-guard.guard';

const appTitle: string = 'Calton Datx';
export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    {
        path: 'login',
        loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent),
        title: `Login • ${appTitle}`,
        canActivate: [ loginGuard ],
    },
    {
        path: '',
        loadComponent: () => import('./main/main.component').then(m => m.MainComponent),
        loadChildren: () => import('./pages/pages.routes'),
        canActivate: [ authGuard ],
    }
];
