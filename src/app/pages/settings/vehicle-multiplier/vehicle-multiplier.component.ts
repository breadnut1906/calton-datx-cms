import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ComponentsModule } from '../../../core/modules/components/components.module';
import { SettingsApiService } from '../../../core/services/settings-api.service';
import { PrimengUiModule } from '../../../core/modules/primeng-ui/primeng-ui.module';

@Component({
  selector: 'app-vehicle-multiplier',
  imports: [ PrimengUiModule, ComponentsModule ],
  templateUrl: './vehicle-multiplier.component.html',
  styleUrl: './vehicle-multiplier.component.scss'
})
export class VehicleMultiplierComponent {

  pageInfo: MenuItem = [ {label: 'Settings'}, {label: 'Vehicle Multiplier'} ];

  settingAPI = inject(SettingsApiService);

  datasource: any

  constructor() {}

  ngOnInit(): void {
    this.settingAPI.getVehicleMultiplier().subscribe({
      next: (data: any) => {
        this.datasource = data.items;
      },
      error: (error) => console.error(error)
    })
  }
}
