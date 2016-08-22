/**
 * Created by sevncz on 16-8-12.
 */

import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Test1Component } from './test1.component';
import { Material2AppAppComponent } from './material2-app.component';
import {ProjectComponent} from "./projectManagement/project.component";
import {HeroListComponent} from "./hero-list.component";
import {AppManagementComponent} from "./appManagement/app-management.component";
import {ReportManagementComponent} from "./reportManagement/report-management.component";
import {TestManagementComponent} from "./testManagement/test-management.component";
import {ScriptManagementComponent} from "./scriptManagement/script-management.component";

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroListComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }, {
    path: 'test1',
    component: Test1Component
  },{
    path: 'material2-app',
    component: Material2AppAppComponent
  },{
    path: 'projectManagement',
    // loadChildren: 'app/projectManagement/project.module'
    component: ProjectComponent
  },{
    path: 'appManagement',
    // loadChildren: 'app/projectManagement/project.module'
    component: AppManagementComponent
  },{
    path: 'reportManagement',
    // loadChildren: 'app/projectManagement/project.module'
    component: ReportManagementComponent
  },{
    path: 'script-management',
    // loadChildren: 'app/projectManagement/project.module'
    component: ScriptManagementComponent
  },{
    path: 'test-management',
    // loadChildren: 'app/projectManagement/project.module'
    component: TestManagementComponent
  }



  // {
  //   path: 'projectManagement',
  //   component: ProjectComponent
  // }
];

export const routing = RouterModule.forRoot(appRoutes);
