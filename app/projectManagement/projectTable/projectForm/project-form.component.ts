import {ProjectEntity} from "../projectEntity";
import {Component} from "@angular/core";
import {ProjectTableService} from "../projectTableService";
/**
 * Created by yxin on 8/18/2016.
 */
@Component({
  moduleId: module.id,
  selector: 'project-new-form',
  pipes: [],
  providers: [ProjectTableService],
  directives: [],
  styleUrls: ['./project-form.component.css'],
  templateUrl: './project-form.component.html'
})
export class ProjectFormComponent{

  private record: ProjectEntity;
  private submitted = false;

  constructor(private recordTableService:ProjectTableService) {
    this.record = new ProjectEntity("","","");
  }

  onSubmit() {
    this.submitted = true;
    this.recordTableService.addNewRecord(this.record);
    this.record = new ProjectEntity("","","");
  }

}
