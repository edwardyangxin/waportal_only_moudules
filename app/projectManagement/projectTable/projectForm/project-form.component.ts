import {ProjectEntity} from "../projectEntity";
import {Component, Output, EventEmitter, OnDestroy} from "@angular/core";
import {ProjectTableService} from "../projectTableService";
import {Subscription} from "rxjs/Rx";
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
export class ProjectFormComponent implements OnDestroy{
  record: ProjectEntity;
  subscription: Subscription;
  @Output() onSubmit = new EventEmitter<boolean>();

  constructor(private recordTableService:ProjectTableService) {
    this.cleanRecord();
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  addNewRecord() {
    this.subscription = this.recordTableService.addNewRecord(this.record).subscribe(resp => console.log(resp),error =>  console.log(error));
    this.cleanRecord();
    this.onSubmit.emit(true);
  }

  cleanRecord() {
    this.record = new ProjectEntity("","","","","");
  }

}
