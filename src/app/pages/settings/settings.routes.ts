import { Routes } from "@angular/router";

const appTitle: string = 'Calton Datx';
export default [
    {
        path: 'vehicle-multiplier',
        loadComponent: () => import('./vehicle-multiplier/vehicle-multiplier.component').then(m => m.VehicleMultiplierComponent),
        title: `Vehicle Multiplier • ${appTitle}`,
    },
    {
        path: 'groups',
        loadComponent: () => import('./groups/groups.component').then(m => m.GroupsComponent),
        title: `Groups • ${appTitle}`,
    }
] as Routes