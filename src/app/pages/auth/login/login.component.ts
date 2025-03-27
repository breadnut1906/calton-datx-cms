import { Component, inject, signal } from '@angular/core';
import { PrimengUiModule } from '../../../core/modules/primeng-ui/primeng-ui.module';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  imports: [ PrimengUiModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})

export class LoginComponent {
  
  message = inject(MessageService);
  isLoading = signal<boolean>(false);

  constructor(public auth: AuthService, private router: Router) {}

  onLogin() {
    this.isLoading.set(true);
    this.auth.onLogin()?.subscribe({
      next: (response) => {    
        console.log(response);
        this.router.navigate(['/dashboard']);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.message.add({ summary: 'Server Error', detail: 'Server is unreachable', icon: 'pi pi-times', severity: 'error' });
        this.isLoading.set(false);
      }
    });
  }
}
