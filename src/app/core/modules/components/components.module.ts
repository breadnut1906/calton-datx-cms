import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { ToolbarComponent } from '../../../components/toolbar/toolbar.component';

const COMPONENT_MODULES = [
  CommonModule,
  SidebarComponent,
  ToolbarComponent
]

@NgModule({
  declarations: [],
  imports: [ ...COMPONENT_MODULES ],
  exports: [ ...COMPONENT_MODULES ]
})
export class ComponentsModule { }
