import { Routes } from "@angular/router";

const appTitle: string = 'VCastplay';
export default [
    {
        path: 'home', 
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        title: `Homepage • ${appTitle}`,
    },
] as Routes