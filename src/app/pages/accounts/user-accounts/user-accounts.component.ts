import { Component, effect, inject, signal } from '@angular/core';
import { PrimengUiModule } from '../../../core/modules/primeng-ui/primeng-ui.module';
import { ComponentsModule } from '../../../core/modules/components/components.module';
import { MenuItem } from 'primeng/api';
import { UserService } from '../../../core/services/user.service';
import { Pagination } from '../../../core/interfaces/datatable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-accounts',
  imports: [ PrimengUiModule, ComponentsModule ],
  templateUrl: './user-accounts.component.html',
  styleUrl: './user-accounts.component.scss'
})
export class UserAccountsComponent {

  /** Injection Variables */
  user = inject(UserService);
  router = inject(Router);

  /** Variables */
  isEdit = signal<boolean>(false);
  isLoading = signal<boolean>(false);
  columns: string[] = [ 'Name', 'Role', 'Created On', 'Status' ];
  pageInfo: MenuItem = [ {label: 'Settings'}, {label: 'User Accounts'} ];
  userOptions: any[] = [
    {
      label: 'Deactivate',
      command: () => this.onDeactivate(),
    },
    {
      label: 'Delete',
      command: () => this.onDelete(),
    }
  ]
  pagination: Pagination = {
    totalItems: 0,
    itemCount: 10,
    itemsPerPage: 10,
    totalPages: 0,
    currentPage: 1,
  };
  datasource: any;

  constructor() {
    effect(() => {
      const user = this.user.user();
      if (user) this.onLoad();
    })
  }

  ngOnInit() { }

  onNew() { 
    this.router.navigate(['/accounts/users/new']) 
  }

  onEdit(id: any) {
    this.router.navigate([`/accounts/users/${id}`])
  }

  onLoad(page: number = 1, limit: number = 10) {
    this.isLoading.set(true);
    this.user.onGetAllUserAccounts(page, limit).subscribe({
      next: (data: any) => { 
        this.datasource = data.items;
        this.pagination = data.meta;
        this.isLoading.set(false);
      },
      error: (error: any) => { 
        this.isLoading.set(false);
        console.error(error); 
      }
    })
  }

  onDelete() {
    console.log('Delete');
  }

  onDeactivate() {
    console.log('Deactivate');
  }

  onPageChange(event: any) {
    const { first, rows }: any = event;
    const page = first / rows + 1;
    this.onLoad(page, rows);
  }
}
