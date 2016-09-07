import {OnInit, Component} from "@angular/core";

import {DataTable, LazyLoadEvent, Message, Button, Dialog, Header, Column} from 'primeng/primeng';
import {TestTableEntity} from "./test-table-entity";
import {TestTableService} from "./test-table-service";
import {DeviceTableEntity} from "../../deviceManagement/device-table/device-table-entity";
import {DeviceTableService} from "../../deviceManagement/device-table/device-table-service";

@Component({
  moduleId:module.id,
  selector: 'test-table',
  pipes: [],
  providers: [TestTableService, DeviceTableService],
  directives: [DataTable,Column,Button,Header,Dialog],
  // styleUrls: ['./testTable.scss'],
  templateUrl: './test-table.html'
})
export class TestTableComponent implements OnInit{
  errorMessage: string;
  records: TestTableEntity[];
  selectedRecords: TestTableEntity[];
  displayDeployTask: boolean = false;
  totalRecords: number;
  deviceTable: DeviceTableEntity[];
  selectedDevices: DeviceTableEntity[];
  totalDevices: number;
  id: string = "";

  constructor(private tableService: TestTableService, private  deviceService: DeviceTableService) {
  }

  ngOnInit() {
    this.getRecords(0,20);
  }

  onDeleteRecord() {
    this.tableService.deleteRecords(this.selectedRecords);
    this.getRecords(0,20);
    this.selectedRecords = [];
  }

  selectRecord(record:TestTableEntity) {
    console.log(record);
    this.deviceTable = [];
    this.id = "";
    this.selectedDevices = [];
    this.totalDevices = null;
    this.deviceService.getRecords(0,50).subscribe(recordTable => {this.deviceTable = recordTable.records; this.totalDevices = recordTable.totalRecords}, error =>  this.errorMessage = <any>error);
    this.id = record.id;
    this.displayDeployTask = true;
  }

  deployCase() {
    console.log("deploy " + this.id);
    this.tableService.deployCase(this.id, this.selectedDevices);
    this.displayDeployTask = false;
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
