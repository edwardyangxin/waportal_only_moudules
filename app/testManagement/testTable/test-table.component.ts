import {OnInit, Component} from "@angular/core";

import {DataTable, LazyLoadEvent, Message, Button, Dialog, Header, Column} from 'primeng/primeng';
import {TestTableEntity} from "./test-table-entity";
import {TestTableService} from "./test-table-service";
import {DeviceTableEntity} from "../../deviceManagement/device-table/device-table-entity";
import {DeviceTableService} from "../../deviceManagement/device-table/device-table-service";
import {Subscription} from "rxjs/Rx";

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
  totalRecords: number;
  subscription: Subscription;
  //page info
  rows: number = 50;
  //device popup
  displayDeployTask: boolean = false;
  widthDeploy: number = 1000;
  rowsDevice: number = 50;
  subscriptionDevice: Subscription;
  deviceTable: DeviceTableEntity[];
  selectedDevices: DeviceTableEntity[];
  totalDevices: number;
  id: string = "";

  constructor(private tableService: TestTableService, private  deviceService: DeviceTableService) {
  }

  ngOnInit() {
    this.getRecords(0,this.rows,null,"","");
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // this.subscriptionDevice.unsubscribe();
  }

  onDeleteRecord() {
    this.tableService.deleteRecords(this.selectedRecords).subscribe(resp => {
      console.log(resp);
      this.getRecords(0,this.rows, null,"","");
      this.selectedRecords = [];
    },error =>  console.log(error));
  }

  selectRecord(record:TestTableEntity) {
    console.log(record);
    this.deviceTable = [];
    this.id = "";
    this.selectedDevices = [];
    this.totalDevices = null;
    this.subscriptionDevice = this.deviceService.getRecords(0,this.rowsDevice,null,"","").subscribe(recordTable => {this.deviceTable = recordTable.records; this.totalDevices = recordTable.totalRecords}, error =>  this.errorMessage = <any>error);
    this.id = record.id;
    this.displayDeployTask = true;
  }

  deployCase() {
    console.log("deploy " + this.id);
    this.tableService.deployCase(this.id, this.selectedDevices);
    this.displayDeployTask = false;
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
