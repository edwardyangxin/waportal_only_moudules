import {Component, NgZone} from "@angular/core";

import {AppTableService} from "../appTableService";
import {AppTableEntity} from "../appTableEntity";
import {SelectItem, Dropdown} from "primeng/primeng";
import {UPLOAD_DIRECTIVES} from "ng2-uploader/index";
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
  cities: SelectItem[];
  selectedCity: string;

  uploadFile: any;
  uploadProgress: number;
  uploadResponse: Object;
  zone: NgZone;
  options: Object = {
    url: 'http://localhost:10050/upload'
  };

  private record: AppTableEntity;
  private submitted = false;

  constructor(private recordTableService:AppTableService) {
    this.record = new AppTableEntity("","","","","","");
    this.cities = [];
    this.cities.push({label:'Select City', value:null});
    this.cities.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
    this.cities.push({label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}});
    this.cities.push({label:'London', value:{id:3, name: 'London', code: 'LDN'}});
    this.cities.push({label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}});
    this.cities.push({label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}});

    this.uploadProgress = 0;
    this.uploadResponse = {};
    this.zone = new NgZone({ enableLongStackTrace: false });
  }

  handleUpload(data): void {
    this.uploadFile = data;
    this.zone.run(() => {
      this.uploadProgress = data.progress.percent;
    });
    let resp = data.response;
    if (resp) {
      resp = JSON.parse(resp);
      this.uploadResponse = resp;
    }
  }handleUpload(data): void {
  this.uploadFile = data;
  this.zone.run(() => {
    this.uploadProgress = data.progress.percent;
  });
  let resp = data.response;
  if (resp) {
    resp = JSON.parse(resp);
    this.uploadResponse = resp;
  }
}

  onSubmit() {
    this.submitted = true;
    this.recordTableService.addNewRecord(this.record);
    this.record = new AppTableEntity("","","","","","");
  }

}
