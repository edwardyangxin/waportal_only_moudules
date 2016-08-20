import {OnInit} from "@angular/core";
import {RecordEntity} from "./recordEntity";
/**
 * Created by yxin on 8/20/2016.
 */
export class TableComponentCommon  {
  errorMessage: string;
  records: RecordEntity[];
  selectedProjects: RecordEntity[];
  display: boolean = false;
  totalRecords: number;
  modal : boolean = false;
  lazyProjects:RecordEntity[];

  // constructor(private tableService: TableServiceCommon) {
  // }
  //
  // ngOnInit() {
  //   this.getProjects();
  //   this.totalRecords = 200;
  // }
  //
  // onAddProject() {
  //   console.log("add project! popup window");
  //   this.display = true;
  // }
  //
  // onDeleteProject() {
  //   this.tableService.deleteProjects(this.selectedProjects);
  //   this.getProjects();
  // }
  //
  // private getProjects() {
  //   this.tableService.getProjects().subscribe(records => this.records = records,
  //     error =>  this.errorMessage = <any>error);
  //   this.tableService.getProjects().subscribe(records => this.lazyProjects = records,
  //     error =>  this.errorMessage = <any>error);
  //   // this.records = [new ProjectTable('1','1','1'),new ProjectTable('2','2','2')]
  // }
  //
  // loadProjectLazy(event: LazyLoadEvent) {
  //   //in a real application, make a remote request to load data using state metadata from event
  //   //event.first = First row offset
  //   //event.rows = Number of rows per page
  //   //event.sortField = Field name to sort with
  //   //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
  //   //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
  //
  //   //imitate db connection over a network
  //   setTimeout(() => {
  //     this.records = this.lazyProjects.slice(event.first, (event.first + event.rows));
  //   }, 250);
  // }
}
