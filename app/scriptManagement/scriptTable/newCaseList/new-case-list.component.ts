import {Component, Input} from "@angular/core";
import 'codemirror/mode/javascript/javascript';
import {ScriptTableEntity} from "../script-table-entity";
import {OrderList} from "primeng/primeng";
import {ScriptTableService} from "../script-table-service";

/**
 * Created by yxin on 8/18/2016.
 */
@Component({
  moduleId: module.id,
  selector: 'new-case-list',
  pipes: [],
  providers: [ScriptTableService],
  directives: [OrderList],
  // styleUrls: ['./script-upload-form.component.css'],
  templateUrl: './new-case-list.component.html'
})
export class NewCaseListComponent{
  caseName:string;
  @Input() selectedRecords: ScriptTableEntity[];

  constructor(private recordTableService:ScriptTableService) {
  }

  addNewRecord() {
    this.recordTableService.addNewCase(this.caseName,this.selectedRecords);
    // to be added : close popup window & clear selected scripts

  }

  cleanRecord() {
    this.selectedRecords = [];
  }
}
