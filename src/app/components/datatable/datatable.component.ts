import { Component, Input } from '@angular/core';
import { PrimengUiModule } from '../../core/modules/primeng-ui/primeng-ui.module';
import { Columns } from '../../core/interfaces/datatable';

@Component({
  selector: 'app-datatable',
  imports: [ PrimengUiModule ],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss'
})
export class DatatableComponent {

  @Input() columns: Columns[] = [];
  @Input() datasource: any[] = [];
  @Input() paginator: boolean = false;
  @Input() actionTempRef: any;
}
