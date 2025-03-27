import { Component, inject, signal } from '@angular/core';
import { DrawerMenu } from '../../core/interfaces/drawer-menu';
import { Router } from '@angular/router';
import { PrimengUiModule } from '../../core/modules/primeng-ui/primeng-ui.module';
import { UtilsService } from '../../core/services/utils.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthService } from '../../core/services/auth.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-sidebar',
  imports: [ PrimengUiModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {

  router = inject(Router);
  utils = inject(UtilsService);
  user = inject(UserService);
  
  confirmation = inject(ConfirmationService);
  menuItems = signal<DrawerMenu[]>([]);

  constructor(private auth: AuthService) {}

  ngOnInit() {    
    this.menuItems.set([
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: '/dashboard'
      },
      {
        label: 'Sites',
        icon: 'pi pi-map-marker',
        routerLink: '/sites'
      },
      {
        label: 'Account',
        icon: 'pi pi-user',
        items: [
          {
            label: 'My Profile',
            icon: 'pi pi-user',
            routerLink: ['/profile'],
          },
          {
            label: 'Users',
            icon: 'pi pi-users',
            routerLink: ['/users'],
          },
          {
            label: 'Security',
            icon: 'pi pi-key',
            routerLink: ['/security'],
          },
        ]
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        expanded: false,
        items: [
          {
            label: 'System Settings',
            items: [
              {
                label: 'Vehicle Multiplier',
                icon: 'pi pi-car',
                routerLink: ['/settings/vehicle-multiplier'],
              },
              {
                label: 'Groups',
                icon: 'pi pi-users',
                routerLink: ['/settings/groups'],
              },
              {
                label: 'Roles',
                icon: 'pi pi-shield',
                routerLink: ['/settings/roles'],
              },
            ]
          },
          {
            label: 'Campaign Settings',
            items: [
              {
                label: 'Companies',
                icon: 'pi pi-building',
                routerLink: ['/settings/companies'],
              },
              {
                label: 'Brands',
                icon: 'pi pi-tag',
                routerLink: ['/settings/brands'],
              },
              {
                label: 'Campaigns',
                icon: 'pi pi-megaphone',
                routerLink: ['/settings/campaigns'],
              }
            ]
          },
        ]
      }
    ])
  }

  onToggleMenu(menuItem: DrawerMenu, event: Event) {
    event.stopPropagation();
    const updatedItems = this.menuItems().map(data => ({ ...data, expanded: data.label === menuItem.label ? !data.expanded : false }));
    this.menuItems.set(updatedItems);
    
    if (menuItem.routerLink && !menuItem.items) this.onClickGotoPage(menuItem)
  }

  onClickLogout(event: Event) {
    this.utils.drawerVisible.set(false);
    this.confirmation.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to log out?',
      closable: true,
      closeOnEscape: true,
      header: 'Logout Confirmation',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      accept: () => {
        this.auth.onLogout();
        this.router.navigate(['/login']);
      },
    })
  }

  onClickGotoPage(subMenu: any) {
    const router = Array.isArray(subMenu.routerLink) ? subMenu.routerLink : [ subMenu.routerLink ]
    this.router.navigate(router);    
    if (this.utils.drawerVisible()) this.utils.drawerVisible.set(!this.utils.drawerVisible());
  }
}
