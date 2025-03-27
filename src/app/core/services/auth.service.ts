import { inject, Injectable, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  apiUrl: string = environment.apiEndpoint;
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean> ( false );
  router = inject(Router);

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [ Validators.required ]),
    rememberMe: new FormControl(false)
  });

  constructor(private message: MessageService, private http: HttpClient, private storage: StorageService) {
    this.checkToken();
  }
  
  checkToken() {
    const accessToken = this.storage.getToken('token');
    const refreshToken = this.storage.getToken('refreshToken');
    if (accessToken && refreshToken) this.isAuthenticated.next(true);
  }

  onLogin() {
    const { remember, ...data } = this.loginForm.value;
    if (this.loginForm.invalid) {
      this.message.add({ summary: 'Login Error', detail: 'Please input required fields (*)', icon: 'pi pi-info-circle', severity: 'error' });
      return;
    }

    return this.http.post(`${this.apiUrl}/auth/login`, data).pipe(
      map((response: any) => {
        if (response) {          
          this.storage.setToken('token', response.accessToken, remember);
          this.storage.setToken('refreshToken', response.refreshToken, remember);
          this.storage.setToken('remember', remember, remember);
          this.isAuthenticated.next(true);
          this.loginForm.reset();
        }
        return response
      })
    )
  }

  onLogout() {
    this.storage.removeToken('token');
    this.storage.removeToken('refreshToken');
    this.storage.removeToken('remember');
    this.storage.removeToken('user');
    this.storage.removeToken('darkmode');
    this.isAuthenticated.next(false);
  }
}
