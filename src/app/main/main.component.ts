import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from '../core/modules/components/components.module';
import { UtilsService } from '../core/services/utils.service';
import { GatewayService } from '../core/services/gateway.service';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-main',
  imports: [ RouterOutlet, ComponentsModule ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',

})
export class MainComponent {

  utils = inject(UtilsService);
  socket = inject(GatewayService);
  user = inject(UserService);

  constructor() {
    this.socket.onConnectionInit();
  }

  ngOnInit() {
    this.user.onGetCurrentUser();
  }
}
