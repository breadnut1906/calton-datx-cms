import { Component, computed, effect, inject, signal } from '@angular/core';
import { PrimengUiModule } from '../../core/modules/primeng-ui/primeng-ui.module';
import { UserService } from '../../core/services/user.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-toolbar',
  imports: [ PrimengUiModule ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  publicURL: string = environment.publicURL;
  userService = inject(UserService);
  info = signal<any | null>(null);

  constructor() {
    effect(() => {
      const user = this.userService.user();
      if (user) this.info.set(user);
    });
  }
}
