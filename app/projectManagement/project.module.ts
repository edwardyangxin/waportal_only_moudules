/**
 * Created by yxin on 8/20/2016.
 */
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import {ProjectComponent} from "./project.component";
import {ProjectTableComponent} from "./projectTable/projectTable.component";
import {ProjectFormComponent} from "./projectTable/projectForm/project-form.component";
import {ProjectTableService} from "./projectTable/projectTableService";

@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ ProjectComponent,ProjectTableComponent,ProjectFormComponent],
  exports:      [ ProjectComponent ],
  providers:    [ ProjectTableService ]
})
export class ProjectManagementModule { }
