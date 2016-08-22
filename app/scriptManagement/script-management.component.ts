/**
 * Created by yxin on 8/18/2016.
 */
import {Component} from "@angular/core";
import {ScriptTableComponent} from "./scriptTable/script-table.component";


@Component({
  moduleId: module.id,
  selector: 'script-management',
  // pipes: [],
  // providers: [],
  directives: [ScriptTableComponent],
  // styleUrls: ['app/projectManagement/app-management.component.css'],
  templateUrl: './script-management.component.html'
})
export class ScriptManagementComponent {

  constructor() {
  }

}
