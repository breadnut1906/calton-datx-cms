import { Component, ViewChild } from '@angular/core';
import { PrimengUiModule } from '../../core/modules/primeng-ui/primeng-ui.module';
import { Popover } from 'primeng/popover';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters',
  imports: [ PrimengUiModule ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  @ViewChild('filter') filterTemplate!: Popover;

  filters: FormGroup = new FormGroup({
    keywords: new FormControl(''),
    sortBy: new FormControl(''),
    sort: new FormControl('asc')
  })

  sortBy: any[] = [
    { label: 'Name', value: 'name' },
    { label: 'Description', value: 'description' },
    { label: 'Created At', value: 'createdAt' }
  ]

  ngOnInit() {
    
  }

  onClickApply() {
    this.filters.reset();
    this.filterTemplate.hide();
  }

  get keywords() { 
    return this.filters.get('keywords');
  }
}
