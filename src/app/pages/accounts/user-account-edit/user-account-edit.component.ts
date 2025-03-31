import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PrimengUiModule } from '../../../core/modules/primeng-ui/primeng-ui.module';
import { UserService } from '../../../core/services/user.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import _ from 'lodash';
import { SettingsApiService } from '../../../core/services/settings-api.service';

@Component({
  selector: 'app-user-account-edit',
  imports: [ PrimengUiModule, RouterLink ],
  templateUrl: './user-account-edit.component.html',
  styleUrl: './user-account-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAccountEditComponent {

  /** Injection Variables */
  user = inject(UserService);
  settingAPI = inject(SettingsApiService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  
  /** Variables */
  roles: any[] = [];
  groups: any[] = [];
  countries: any[] = [];
  isEdit = signal<boolean>(false);
  isLoading = signal<boolean>(false);
  pageInfo: MenuItem = [ {label: 'Settings'}, {label: 'User Accounts'} ];
  userForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', [ Validators.required ]),
    lastName: new FormControl('', [ Validators.required ]),
    username: new FormControl('', [ Validators.required ]),
    email: new FormControl('', [ Validators.required ]),
    groupIds: new FormControl([], { nonNullable: true }),
    roleId: new FormControl(null, [ Validators.required ]),
    country: new FormControl(null, [ Validators.required ]),
    companyIds: new FormControl([], { nonNullable: true }),
    brandIds: new FormControl([], { nonNullable: true }),
    campaignIds: new FormControl([], { nonNullable: true }),
  })

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (!isNaN(id) && !isNaN(parseFloat(id))) {
        this.isEdit.set(true);
        this.onLoadUserInfo(id);
      }
    });
    this.onLoadCountries();
    this.onLoadGroups();
    this.onLoadRoles();
  }

  onLoadUserInfo(id: number) {
    this.isLoading.set(true);
    this.user.onGetUserAccountId(id).subscribe({
      next: (response) => {
        const { companies, campaigns, brands, ...result }: any = response;
        this.isLoading.set(false);

        this.userForm.patchValue({ 
          ...result, 
          groupIds: _.map(result.groups, 'id'),
          companyIds: _.map(companies, 'id'), 
          brandIds:_.map(brands, 'id'),
          campaignIds: _.map(campaigns, 'id'),
        });

        console.log(this.userForm.value);
        
      },
      error: (err) => {
        this.isLoading.set(false);
        console.error('Error loading user information:', err);
      }
    })
  }
  
  onLoadCountries() {
    this.settingAPI.getCountries().subscribe({
      next: (data: any) => this.countries = data,
      error: (error) => console.error(error)
    })
  }

  onLoadRoles() {
    this.settingAPI.getAllRoles().subscribe({
      next: (data: any) => this.roles = data.items,
      error: (error) => console.error(error)
    })
  }

  onLoadGroups() {
    this.settingAPI.getAllGroups().subscribe({
      next: (data: any) => this.groups = data.items,
      error: (error) => console.error(error)
    })
  }

  onSave() {
    console.log(this.userForm.value);    
  }
}
