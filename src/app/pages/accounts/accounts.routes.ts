import { Routes } from "@angular/router";

const appTitle: string = 'Calton Datx';
export default [
    {
        path: 'users',
        loadComponent: () => import('./user-accounts/user-accounts.component').then(m => m.UserAccountsComponent),
        title: `Users • ${appTitle}`,
    },
    {
        path: 'users/:id',
        loadComponent: () => import('./user-account-edit/user-account-edit.component').then(m => m.UserAccountEditComponent),
        title: `Users • ${appTitle}`,
    },
    {
        path: 'profile',
        loadComponent: () => import('./user-profile/user-profile.component').then(m => m.UserProfileComponent),
        title: `My Profile • ${appTitle}`,
    }
] as Routes