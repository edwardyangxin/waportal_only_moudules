/**
 * Created by yxin on 8/18/2016.
 */
import {Component} from "@angular/core";
import {TestTableComponent} from "./testTable/test-table.component";

@Component({
  moduleId: module.id,
  selector: 'test-management',
  // pipes: [],
  // providers: [],
  directives: [TestTableComponent],
  // styleUrls: ['app/projectManagement/app-management.component.css'],
  templateUrl: './test-management.component.html'
})
export class TestManagementComponent {

  constructor() {
  }

}
