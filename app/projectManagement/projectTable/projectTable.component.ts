import {OnInit, Component} from "@angular/core";
import {ProjectEntity} from "./projectEntity";
import {ProjectTableService} from "./projectTableService";

import {DataTable, LazyLoadEvent, Column, Dialog, Header, Button, Footer} from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'projectTable',
  pipes: [],
  providers: [ProjectTableService],
  directives: [DataTable,Column,Button,Header,Dialog,Footer],
  // styleUrls: ['./projectTable.scss'],
  templateUrl: './projectTable.html'
})
export class ProjectTableComponent implements OnInit {
  errorMessage: string;
  records: ProjectEntity[];
  selectedRecords: ProjectEntity[];
  display: boolean = false;
  totalRecords: number;
  // modal : boolean = false;
  lazyRecords:ProjectEntity[];

  constructor(private tableService: ProjectTableService) {
  }

  ngOnInit() {
    this.getRecords(0,20);
  }

  onAddRecord() {
    console.log("add project! popup window");
    this.display = true;
  }

  onDeleteRecord() {
    this.tableService.deleteRecords(this.selectedRecords);
    this.getRecords(0,20);
    this.selectedRecords = [];
  }

  private getRecords(first:number,rows:number) {
    this.tableService.getRecords(first,rows).subscribe(recordTable => {this.records = recordTable.records; this.totalRecords = recordTable.totalRecords},
      error =>  this.errorMessage = <any>error);
    // this.tableService.getRecords(first,rows).subscribe(recordTable => this.records = recordTable.records,
    //   error =>  this.errorMessage = <any>error);
    // this.records = [new ProjectTable('1','1','1'),new ProjectTable('2','2','2')]
    // this.totalRecords = 200;
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

    this.getRecords(first,rows);
    //imitate db connection over a network
    // setTimeout(() => {
    //   this.records = this.lazyRecords.slice(event.first, (event.first + event.rows));
    // }, 250);
  }
}
