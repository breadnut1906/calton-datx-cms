import { Component, computed, effect, inject } from '@angular/core';
import { PrimengUiModule } from '../../../core/modules/primeng-ui/primeng-ui.module';
import { FormGroup } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import _ from 'lodash';

@Component({
  selector: 'app-dashboard-filters',
  imports: [ PrimengUiModule ],
  templateUrl: './dashboard-filters.component.html',
  styleUrl: './dashboard-filters.component.scss'
})
export class DashboardFiltersComponent {

  /** Injecttions */
  user = inject(UserService);

  /** Variables */
  priviledeges: any = computed(() => _.map(this.user.user(), data => data.role.priviledeges));
  filters: FormGroup = new FormGroup({

  })

  constructor() {
    effect(() => {
      const user = this.user.user();
      if (user) console.log(user);
    })
  }

  ngOnInit() {
    console.log(this.priviledeges);
    
  }
}
