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
    this.getRecords();
    this.totalRecords = 200;
  }

  onAddProject() {
    console.log("add project! popup window");
    this.display = true;
  }

  onDeleteProject() {
    this.tableService.deleteRecords(this.selectedRecords);
    this.getRecords();
  }

  private getRecords() {
    this.tableService.getRecords().subscribe(records => this.records = records,
      error =>  this.errorMessage = <any>error);
    this.tableService.getRecords().subscribe(records => this.lazyRecords = records,
      error =>  this.errorMessage = <any>error);
    // this.records = [new ProjectTable('1','1','1'),new ProjectTable('2','2','2')]
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

  selectRecord(record: ReportTableEntity) {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Car Select', detail:'Vin: ' + record.appName});
  }
}