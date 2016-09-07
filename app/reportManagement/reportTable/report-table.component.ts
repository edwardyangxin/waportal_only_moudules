import {OnInit, Component} from "@angular/core";

import {DataTable, LazyLoadEvent, Message, Button, Dialog, Header, Column} from 'primeng/primeng';
import {ReportTableEntity} from "./report-table-entity";
import {ReportTableService} from "./report-table-service";

@Component({
  moduleId:module.id,
  selector: 'report-table',
  pipes: [],
  providers: [ReportTableService],
  directives: [DataTable,Column,Button,Header,Dialog],
  // styleUrls: ['./reportTable.scss'],
  templateUrl: './report-table.html'
})
export class ReportTableComponent implements OnInit{
  errorMessage: string;
  records: ReportTableEntity[];
  selectedRecords: ReportTableEntity[];
  display: boolean = false;
  totalRecords: number;
  modal : boolean = false;
  lazyRecords:ReportTableEntity[];
  msgs: Message[] = [];

  constructor(private tableService: ReportTableService) {
  }

  ngOnInit() {
    this.getRecords(0,50);
  }

  onRefreshRecord() {
    console.log("refresh window");
    this.getRecords(0,50)
  }

  onDeleteRecord() {
    this.tableService.deleteRecords(this.selectedRecords);
    this.getRecords(0,20);
    this.selectedRecords = [];
  }

  private getRecords(first:number,rows:number) {
    this.tableService.getRecords(first,rows).subscribe(recordTable => {this.records = recordTable.records; this.totalRecords = recordTable.totalRecords},
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

    this.getRecords(first,rows);
  }
}
