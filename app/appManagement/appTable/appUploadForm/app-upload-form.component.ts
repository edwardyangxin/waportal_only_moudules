import {Component} from "@angular/core";

import {AppTableService} from "../appTableService";
import {AppTableEntity, AppTableEntity, AppTableEntity} from "../appTableEntity";
/**
 * Created by yxin on 8/18/2016.
 */
@Component({
  moduleId: module.id,
  selector: 'app-upload-form',
  pipes: [],
  providers: [AppTableService],
  directives: [],
  styleUrls: ['./project-form.component.css'],
  templateUrl: './project-form.component.html'
})
export class AppUploadFormComponent{

  private record: AppTableEntity;
  private submitted = false;

  constructor(private recordTableService:AppTableService) {
    this.record = new AppTableEntity("","","","","","");
  }

  onSubmit() {
    this.submitted = true;
    this.recordTableService.addNewRecord(this.record);
    this.record = new AppTableEntity("","","","","","");
  }

}
