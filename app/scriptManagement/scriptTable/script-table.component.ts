import {OnInit, Component} from "@angular/core";
import {DataTable, LazyLoadEvent, Button, Dialog, Header, Column} from "primeng/primeng";
import {ScriptTableEntity} from "./script-table-entity";
import {ScriptTableService} from "./script-table-service";
import {ScriptUploadFormComponent} from "./scriptUploadForm/script-upload-form.component";
import {ScriptEditorComponent} from "./scriptEditor/script-editor.component";
import {NewCaseListComponent} from "./newCaseList/new-case-list.component";
import {Codemirror} from 'ng2-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import {Subscription} from "rxjs/Rx";


@Component({
  moduleId:module.id,
  selector: 'script-table',
  pipes: [],
  providers: [ScriptTableService],
  directives: [ScriptUploadFormComponent, ScriptEditorComponent, NewCaseListComponent,DataTable,Column,Button,Header,Dialog,Codemirror],
  // styleUrls: ['./scriptTable.scss'],
  templateUrl: './script-table.html'
})
export class ScriptTableComponent implements OnInit{
  errorMessage: string;
  records: ScriptTableEntity[];
  selectedRecords: ScriptTableEntity[];
  displayNew: boolean = false;
  displayCase: boolean = false;
  displayScript: boolean = false;
  caseName: string;
  totalRecords: number;
  subscription: Subscription;

  //page info
  rows: number = 50;

  code:string = "";
  id: string = "";
  // Configuration object
  config = {
    lineNumbers: true,
    mode: {
      name: 'python',
      json: true
    }
  };

  constructor(private tableService: ScriptTableService) {
  }

  ngOnInit() {
    this.getRecords(0,this.rows,null,"","");
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddRecord() {
    console.log("add! popup window");
    this.displayNew = true;
  }

  onAddCase() {
    console.log("add! popup window");
    this.displayCase = true;
  }

  onSubmit(){
    console.log("reload table!");
    this.getRecords(0,this.rows, null,"","");
  }

  selectRecord(record:ScriptTableEntity) {
    console.log(record);
    this.code = "";
    this.id = "";
    this.tableService.getScriptCode(record).subscribe(text => this.code = text, error =>  this.errorMessage = <any>error);
    this.id = record.id;
    this.displayScript = true;
  }

  uploadScript() {
    console.log("upload " + this.id);
    this.tableService.uploadScript(this.id, this.code).subscribe(resp => console.log(resp),error =>  console.log(error));
  }

  onDeleteRecord() {
    this.tableService.deleteRecords(this.selectedRecords).subscribe(resp => {
      console.log(resp);
      this.getRecords(0,this.rows, null,"","");
      this.selectedRecords = [];
    },error =>  console.log(error));
  }

  addNewCase() {
    this.tableService.addNewCase(this.caseName,this.selectedRecords).subscribe(resp => {
      console.log(resp);
      // to be added : close popup window & clear selected scripts
      this.displayCase = false;
      this.selectedRecords = [];
      this.caseName = "";
    },error =>  console.log(error));
  }

  getRecords(first:number,rows:number, filters: Map<string,Array<string>>, sortField:string, sortOrder:string) {
    this.subscription = this.tableService.getRecords(first,rows, filters, sortField, sortOrder).subscribe(recordTable => {this.records = recordTable.records; this.totalRecords = recordTable.totalRecords},
      error =>  this.errorMessage = <any>error);
  }

  loadRecordLazy(event: LazyLoadEvent) {
    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    let first = event.first;
    //event.rows = Number of rows per page
    let rows = event.rows;
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    this.getRecords(first,rows,null,"","");
  }
}
