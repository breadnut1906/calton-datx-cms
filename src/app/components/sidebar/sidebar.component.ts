import { Component, inject, signal } from '@angular/core';
import { DrawerMenu } from '../../core/interfaces/drawer-menu';
import { Router } from '@angular/router';
import { PrimengUiModule } from '../../core/modules/primeng-ui/primeng-ui.module';

@Component({
  selector: 'app-sidebar',
  imports: [ PrimengUiModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  router = inject(Router);
  menuItems = signal<DrawerMenu[]>([]);

  ngOnInit() {    
    this.menuItems.set([
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: '/dashboard'
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        expanded: false,
        items: [
          {
            label: 'Profile',
            icon: 'pi pi-user',
            routerLink: ['/settings/profile'],
          },
          {
            label: 'Users',
            icon: 'pi pi-users',
            routerLink: ['/settings/user-management'],
          },
          {
            label: 'Roles',
            icon: 'pi pi-lock',
            routerLink: ['/settings/role-management'],
          }
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

  onClickGotoPage(subMenu: any) {
    const router = Array.isArray(subMenu.routerLink) ? subMenu.routerLink : [ subMenu.routerLink ] //isArray(subMenu.routerLink)
    this.router.navigate(router);    
    // if (this.utils.drawerVisible()) this.utils.drawerVisible.set(!this.utils.drawerVisible());
  }
}
