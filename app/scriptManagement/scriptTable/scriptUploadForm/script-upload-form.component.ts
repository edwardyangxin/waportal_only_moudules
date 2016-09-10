import {Component, NgZone, EventEmitter, Output} from "@angular/core";

import {SelectItem, Dropdown} from "primeng/primeng";
import {ScriptTableService} from "../script-table-service";
import {ScriptTableEntity} from "../script-table-entity";
import {AppSettings} from "../../../commonFactory/app-settings";
import {AppTableEntity} from "../../../appManagement/appTable/appTableEntity";
/**
 * Created by yxin on 8/18/2016.
 */
@Component({
  moduleId: module.id,
  selector: 'script-upload-form',
  pipes: [],
  providers: [ScriptTableService],
  directives: [Dropdown],
  // styleUrls: ['./script-upload-form.component.css'],
  templateUrl: './script-upload-form.component.html'
})
export class ScriptUploadFormComponent{
  selectItems: SelectItem[];
  selectedItem: AppTableEntity;
  @Output() onSubmit = new EventEmitter<boolean>();

  uploadFile: any;
  uploadProgress: number;
  uploadResponse: Object;
  zone: NgZone;
  options: Object = {
    url: AppSettings.API_ENDPOINT+"/script/upload-script"
  };

  private record: ScriptTableEntity;

  constructor(private recordTableService:ScriptTableService) {
    //get record list
    this.selectItems = [];
    this.recordTableService.getAppList().subscribe(recordList => {
        recordList.records.forEach(record => this.selectItems.push({label:record.name, value:record}));
        this.selectedItem = recordList.records[0];
      }, error =>  console.log(error));

    // init form
    this.cleanRecord();

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
      this.record.id = resp.id;
    }
  }

  addNewRecord() {
    this.recordTableService.addNewRecord(this.record,this.selectedItem).subscribe(resp => {
      console.log(resp);
      this.cleanRecord();
      this.onSubmit.emit(true);
    },error =>  console.log(error));
  }

  cleanRecord() {
    this.uploadFile = null;
    this.record = new ScriptTableEntity("","","","","","","");
  }

}
