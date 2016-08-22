import {Component} from "@angular/core";

import {SelectItem, Dropdown} from "primeng/primeng";
import {ScriptTableService} from "../script-table-service";
import {ScriptTableEntity} from "../script-table-entity";
/**
 * Created by yxin on 8/18/2016.
 */
@Component({
  moduleId: module.id,
  selector: 'scrip-upload-form',
  pipes: [],
  providers: [ScriptTableService],
  directives: [Dropdown],
  styleUrls: ['./script-upload-form.component.css'],
  templateUrl: './script-upload-form.component.html'
})
export class ScriptUploadFormComponent{
  cities: SelectItem[];
  selectedCity: string;

  private record: ScriptTableEntity;
  private submitted = false;

  constructor(private recordTableService:ScriptTableService) {
    this.record = new ScriptTableEntity("","","","","");
    this.cities = [];
    this.cities.push({label:'Select City', value:null});
    this.cities.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
    this.cities.push({label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}});
    this.cities.push({label:'London', value:{id:3, name: 'London', code: 'LDN'}});
    this.cities.push({label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}});
    this.cities.push({label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}});
  }

  onSubmit() {
    this.submitted = true;
    this.recordTableService.addNewRecord(this.record);
    this.record = new ScriptTableEntity("","","","","");
  }

}
