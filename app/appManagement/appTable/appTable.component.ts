import {OnInit, Component, OnDestroy} from "@angular/core";
import {DataTable, LazyLoadEvent, Button, Dialog, Header, Column} from "primeng/primeng";
import {AppTableEntity} from "./appTableEntity";
import {AppTableService} from "./appTableService";
import {AppUploadFormComponent} from "./appUploadForm/app-upload-form.component";
import {Subscription} from "rxjs/Rx";

@Component({
  moduleId:module.id,
  selector: 'app-table',
  pipes: [],
  providers: [AppTableService],
  directives: [AppUploadFormComponent,DataTable,Column,Button,Header,Dialog],
  // styleUrls: ['./appTable.scss'],
  templateUrl: './appTable.html'
})
export class AppTableComponent implements OnInit, OnDestroy{
  errorMessage: string;
  records: AppTableEntity[];
  selectedRecords: AppTableEntity[];
  display: boolean = false;
  totalRecords: number;
  subscription: Subscription;

  //page info
  rows: number = 20;

  constructor(private tableService: AppTableService) {
  }

  ngOnInit() {
    this.getRecords(0,this.rows,null,"","");
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddRecord() {
    console.log("add! popup window");
    this.display = true;
  }

  onSubmit(){
    console.log("reload table!");
    this.getRecords(0,this.rows, null,"","");
  }

  onDeleteRecord() {
    this.tableService.deleteRecords(this.selectedRecords).subscribe(resp => console.log(resp),error =>  console.log(error));
    this.getRecords(0,this.rows,null,"","");
    this.selectedRecords = [];
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
