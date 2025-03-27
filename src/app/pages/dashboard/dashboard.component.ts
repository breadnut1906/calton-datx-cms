import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ComponentsModule } from '../../core/modules/components/components.module';

@Component({
  selector: 'app-dashboard',
  imports: [ ComponentsModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  pageInfo: MenuItem = [ {label: 'Dashboard'} ];

}
