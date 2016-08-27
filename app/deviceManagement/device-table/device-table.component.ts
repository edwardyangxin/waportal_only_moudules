import {OnInit, Component} from "@angular/core";

import {DataTable, LazyLoadEvent, Column, Dialog, Header, Button, Footer} from 'primeng/primeng';
import {DeviceEntity} from "./device-table-entity";
import {DeviceTableService} from "./device-table-service";

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
  records: DeviceEntity[];
  selectedRecords: DeviceEntity[];
  display: boolean = false;
  totalRecords: number;
  // modal : boolean = false;
  lazyRecords:DeviceEntity[];

  constructor(private tableService: DeviceTableService) {
  }

  ngOnInit() {
    this.getRecords();
    this.totalRecords = 200;
  }

  onAddRecord() {
    console.log("add device! popup window");
    this.display = true;
  }

  onDeleteRecord() {
    this.tableService.deleteRecords(this.selectedRecords);
    this.getRecords();
  }

  private getRecords() {
    this.tableService.getRecords().subscribe(records => this.lazyRecords = records,
      error =>  this.errorMessage = <any>error);
    this.tableService.getRecords().subscribe(records => this.records = records.slice(0, 20),
      error =>  this.errorMessage = <any>error);
    // this.records = [new DeviceTable('1','1','1'),new DeviceTable('2','2','2')]
  }

  loadRecordLazy(event: LazyLoadEvent) {
    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    setTimeout(() => {
      this.records = this.lazyRecords.slice(event.first, (event.first + event.rows));
    }, 250);
  }
}
