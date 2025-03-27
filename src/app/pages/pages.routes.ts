import { Routes } from "@angular/router";

const appTitle: string = 'Calton Datx';
export default [
    {
        path: 'dashboard', 
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        title: `Dashboard • ${appTitle}`,
    },
    {
        path: 'settings',
        loadChildren: () => import('./settings/settings.routes')
    },
    { path: '**', redirectTo: 'dashboard' },
] as Routes