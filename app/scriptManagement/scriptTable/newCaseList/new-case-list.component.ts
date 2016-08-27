import {Component, Input} from "@angular/core";
import 'codemirror/mode/javascript/javascript';
import {ScriptTableEntity} from "../script-table-entity";
import {OrderList} from "primeng/primeng";

/**
 * Created by yxin on 8/18/2016.
 */
@Component({
  moduleId: module.id,
  selector: 'new-case-list',
  pipes: [],
  // providers: [ScriptTableService],
  directives: [OrderList],
  // styleUrls: ['./script-upload-form.component.css'],
  templateUrl: './new-case-list.component.html'
})
export class NewCaseListComponent{
  @Input() selectedRecords: ScriptTableEntity[];

}
