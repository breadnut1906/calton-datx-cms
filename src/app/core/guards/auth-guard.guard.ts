import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);  

  const isAuthenticated = await firstValueFrom(authService.isAuthenticated);  
  
  if (!isAuthenticated) {
    router.navigate(['/login']); 
    return false; 
  }

  return true;
};


export const loginGuard: CanActivateFn = async (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);
  
  const isAuthenticated = await firstValueFrom(authService.isAuthenticated);

  if (isAuthenticated) {
    router.navigate(['/dashboard']);
    return false;
  }
  
  return true;
};