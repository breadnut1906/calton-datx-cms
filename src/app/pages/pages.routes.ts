import { Routes } from "@angular/router";

const appTitle: string = 'VCastplay';
export default [
    {
        path: 'dashboard', 
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        title: `Dashboard • ${appTitle}`,
    },
] as Routes