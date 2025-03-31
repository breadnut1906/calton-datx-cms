import { Component, inject, signal } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ComponentsModule } from '../../../core/modules/components/components.module';
import { SettingsApiService } from '../../../core/services/settings-api.service';
import { PrimengUiModule } from '../../../core/modules/primeng-ui/primeng-ui.module';
import { Columns } from '../../../core/interfaces/datatable';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '../../../core/services/utils.service';

@Component({
  selector: 'app-vehicle-multiplier',
  imports: [ PrimengUiModule, ComponentsModule ],
  templateUrl: './vehicle-multiplier.component.html',
  styleUrl: './vehicle-multiplier.component.scss'
})
export class VehicleMultiplierComponent {

  /** Injections */
  utils = inject(UtilsService);
  settingAPI = inject(SettingsApiService);
  message = inject(MessageService);

  /** Variables */
  showDialog = signal<boolean>(false);
  pageInfo: MenuItem = [ {label: 'Settings'}, {label: 'Vehicle Multiplier'} ];
  columns: Columns[] = [
    { field: 'name', header: 'Vehicle Type' },
    { field: 'multiplier', header: 'Multiplier' },
  ];
  vehicleForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, [Validators.required]),
    multiplier: new FormControl(null, [Validators.required])
  })
  datasource: any

  constructor() {}

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad() {
    this.settingAPI.getVehicleMultiplier().subscribe({
      next: (data: any) => { this.datasource = data.items; },
      error: (error) => console.error(error)
    })
  }

  onEdit(data: any) {
    this.vehicleForm.patchValue(data);
    this.showDialog.set(true);
  }

  onSave(event: Event) {
    if (this.vehicleForm.invalid) return;
    this.utils.confirm(event, 'Are you sure you want to save changes?', 'Confirm Save', 'pi-info-circle', 'Save').then((result) => {
      if (result) {
        this.settingAPI.saveVehicleMultiplier(this.vehicleForm).subscribe({
          next: (data: any) => {
            this.message.add({ summary: 'Vehicle Multiplier Saved', detail: 'Vehicle multiplier saved successfully', icon: 'pi pi-check', severity:'success' });
            this.onUpdate(data);            
            this.showDialog.set(false);
            this.vehicleForm.reset();
          },
          error: (error) => {
            this.message.add({ summary: 'Vehicle Multiplier Error', detail: 'Failed to save vehicle multiplier', icon: 'pi pi-exclamation-triangle', severity: 'error' });
            console.error(error);
          }
        })        
      }
    })
  }

  onUpdate(item: any) {
    const { id } = this.vehicleForm.value;
    const index = this.datasource.findIndex((data: any) => data.id === id);
    if (index !== -1) this.datasource[index] = { ...item };
  }

  onCancel() {
    this.showDialog.set(false);
    this.vehicleForm.reset();
  }
}
