import { Component, Input } from '@angular/core';
import { PrimengUiModule } from '../../core/modules/primeng-ui/primeng-ui.module';

@Component({
  selector: 'app-datatable',
  imports: [ PrimengUiModule ],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss'
})
export class DatatableComponent {

  @Input() columns: string[] = [];
  @Input() datasource: any[] = [];
  @Input() paginator: boolean = true;
  @Input() actionTempRef: any;
}
