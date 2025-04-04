import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenuModule } from 'primeng/menu';
import { ListboxModule } from 'primeng/listbox';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PopoverModule } from 'primeng/popover';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IftaLabelModule } from 'primeng/iftalabel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { TextareaModule } from 'primeng/textarea';
import { DrawerModule } from 'primeng/drawer';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { AccordionModule } from 'primeng/accordion';
import { RippleModule } from 'primeng/ripple';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DividerModule } from 'primeng/divider';
import { ProgressBarModule } from 'primeng/progressbar';
import { PanelModule } from 'primeng/panel';
import { InputNumberModule } from 'primeng/inputnumber';
import { FluidModule } from 'primeng/fluid';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PaginatorModule } from 'primeng/paginator';
import { MultiSelectModule } from 'primeng/multiselect';

import { StyleClassModule } from 'primeng/styleclass';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgxEchartsModule } from 'ngx-echarts';

const PRIMENGMODULES = [
  CommonModule,
  AccordionModule,
  ButtonModule,
  ToolbarModule,
  AvatarModule,
  AvatarGroupModule,
  StyleClassModule,
  MenuModule,
  ListboxModule,
  BadgeModule,
  OverlayBadgeModule,
  TableModule,
  BreadcrumbModule,
  CardModule,
  TagModule,
  InputTextModule,
  ReactiveFormsModule,
  FormsModule,
  InputGroupModule,
  InputGroupAddonModule,
  PopoverModule,
  SelectModule,
  RadioButtonModule,
  TooltipModule,
  DialogModule,
  FloatLabelModule,
  IftaLabelModule,
  ConfirmDialogModule,
  ToastModule,
  TextareaModule,
  DrawerModule,
  PanelMenuModule,
  MegaMenuModule,
  TieredMenuModule,
  RippleModule,
  ConfirmPopupModule,
  PasswordModule,
  CheckboxModule,
  ProgressBarModule,
  PanelModule,
  InputNumberModule,
  FluidModule,
  // NgxEchartsModule,
  SelectButtonModule,
  DividerModule,
  SplitButtonModule,
  PaginatorModule,
  MultiSelectModule,
];

@NgModule({
  declarations: [],
  imports: [ ...PRIMENGMODULES ],
  exports: [ ...PRIMENGMODULES ],
})
export class PrimengUiModule { }
