/**
 * Created by yxin on 8/18/2016.
 */
import {Component} from '@angular/core';
import {AppTableComponent} from "./appTable/appTable.component";
import {AppUploadFormComponent} from "./appTable/appUploadForm/app-upload-form.component";

@Component({
  moduleId: module.id,
  selector: 'app-management',
  // pipes: [],
  // providers: [],
  directives: [AppTableComponent],
  // styleUrls: ['app/projectManagement/app-management.component.css'],
  templateUrl: './app-management.component.html'
})
export class AppManagementComponent {

  constructor() {
  }

}
