import {Component, NgZone} from "@angular/core";

import {AppTableService} from "../appTableService";
import {AppTableEntity} from "../appTableEntity";
import {SelectItem, Dropdown} from "primeng/primeng";
import {UPLOAD_DIRECTIVES} from "ng2-uploader/index";
import {ProjectEntity} from "../../../projectManagement/projectTable/projectEntity";
import {AppSettings} from "../../../commonFactory/app-settings";
/**
 * Created by yxin on 8/18/2016.
 */
@Component({
  moduleId: module.id,
  selector: 'app-upload-form',
  pipes: [],
  providers: [AppTableService],
  directives: [Dropdown,UPLOAD_DIRECTIVES],
  styleUrls: ['./app-upload-form.component.css'],
  templateUrl: './app-upload-form.component.html'
})
export class AppUploadFormComponent{
  errorMessage: any;
  selectItems: SelectItem[];
  selectedItem: ProjectEntity;

  uploadFile: any;
  uploadProgress: number;
  uploadResponse: Object;
  zone: NgZone;
  options: Object = {
    url: AppSettings.API_ENDPOINT+"/app/upload"
  };

  private record: AppTableEntity;
  private submitted = false;

  constructor(private recordTableService:AppTableService) {
    //get project list
    this.selectItems = [];
    this.recordTableService.getProjectList().subscribe(projectList => {
      projectList.records.forEach(project => this.selectItems.push({label:project.name, value:project}));
      this.selectedItem = projectList.records[0];
    },
      error =>  this.errorMessage = <any>error);

    // init form
    this.record = new AppTableEntity(0,"","","","","","");

    //init upload data
    this.uploadProgress = 0;
    this.uploadResponse = {};
    this.zone = new NgZone({ enableLongStackTrace: false });
  }

  handleUpload(data:any): void {
    this.uploadFile = data;
    this.zone.run(() => {
      this.uploadProgress = data.progress.percent;
    });
    let resp = data.response;
    if (resp) {
      resp = JSON.parse(resp);
      this.uploadResponse = resp;
      console.log(this.uploadResponse);
      this.record.id = resp.get("id");
    }
  }

  addNewRecord() {
    this.recordTableService.addNewRecord(this.record,this.selectedItem);
    this.record = new AppTableEntity(0,"","","","","","");
  }

}
