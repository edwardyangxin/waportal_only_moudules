import {OnInit, Component} from "@angular/core";

import {DataTable, LazyLoadEvent, Column, Dialog, Header, Button, Footer} from 'primeng/primeng';
import {DeviceTableService} from "./device-table-service";
import {DeviceTableEntity} from "./device-table-entity";
import {Subscription} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'device-table',
  pipes: [],
  providers: [DeviceTableService],
  directives: [DataTable,Column,Button,Header,Dialog,Footer],
  // styleUrls: ['./device-table.scss'],
  templateUrl: './device-table.html'
})
export class DeviceTableComponent implements OnInit {
  errorMessage: string;
  records: DeviceTableEntity[];
  selectedRecords: DeviceTableEntity[];
  // display: boolean = false;
  totalRecords: number;
  subscription: Subscription;

  //page info
  rows: number = 50;

  constructor(private tableService: DeviceTableService) {
  }

  ngOnInit() {
    this.getRecords(0,this.rows,null,"","");
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
