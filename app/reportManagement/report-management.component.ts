/**
 * Created by yxin on 8/18/2016.
 */
import {Component} from "@angular/core";
import {ReportTableComponent} from "./reportTable/report-table.component";

@Component({
  moduleId: module.id,
  selector: 'report-management',
  // pipes: [],
  // providers: [],
  directives: [ReportTableComponent],
  // styleUrls: ['app/projectManagement/app-management.component.css'],
  templateUrl: './report-management.component.html'
})
export class ReportManagementComponent {

  constructor() {
  }

}
