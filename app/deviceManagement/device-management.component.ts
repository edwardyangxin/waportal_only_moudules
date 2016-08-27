/**
 * Created by yxin on 8/18/2016.
 */
import {Component} from '@angular/core';
import {TabView, TabPanel} from "primeng/primeng";


@Component({
  moduleId: module.id,
  selector: 'device-management',
  // pipes: [],
  // providers: [],
  directives: [TabView,TabPanel],
  // styleUrls: ['./device-management.component.css'],
  templateUrl: './device-management.component.html'
})
export class DeviceManagementComponent {

  constructor() {
  }

}
