import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { ToolbarComponent } from '../../../components/toolbar/toolbar.component';
import { BreadcrumbsComponent } from '../../../components/breadcrumbs/breadcrumbs.component';
import { DatatableComponent } from '../../../components/datatable/datatable.component';

const COMPONENT_MODULES = [
  CommonModule,
  SidebarComponent,
  ToolbarComponent,
  BreadcrumbsComponent,
  DatatableComponent,
]

@NgModule({
  declarations: [],
  imports: [ ...COMPONENT_MODULES ],
  exports: [ ...COMPONENT_MODULES ]
})
export class ComponentsModule { }
