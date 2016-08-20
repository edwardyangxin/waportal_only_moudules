/**
 * Created by yxin on 8/18/2016.
 */
import {Component} from '@angular/core';

import {ProjectTableComponent} from './projectTable/projectTable.component';

@Component({
  moduleId: module.id,
  selector: 'project',
  // pipes: [],
  // providers: [],
  directives: [ProjectTableComponent],
  styleUrls: ['./project.component.css'],
  templateUrl: './project.component.html'
})
export class ProjectComponent {

  constructor() {
  }

}
