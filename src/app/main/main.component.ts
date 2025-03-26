import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from '../core/modules/components/components.module';
import { UtilsService } from '../core/services/utils.service';

@Component({
  selector: 'app-main',
  imports: [ RouterOutlet, ComponentsModule ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  utils = inject(UtilsService);
}
