import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule ,XHRBackend, HTTP_PROVIDERS } from '@angular/http';

import {MATERIAL_PROVIDERS} from "ng2-material";

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { routing } from './app.routes';

import { HeroService }  from './hero.service';
import { DashboardComponent } from './dashboard.component';

import {MdButtonToggleModule} from '@angular2-material/button-toggle/button-toggle';
import {MdButtonModule} from '@angular2-material/button/button';
import {MdCheckboxModule} from '@angular2-material/checkbox/checkbox';
import {MdRadioModule} from '@angular2-material/radio/radio';
import {MdSlideToggleModule} from '@angular2-material/slide-toggle/slide-toggle';
import {MdSliderModule} from '@angular2-material/slider/slider';
import {MdSidenavModule} from '@angular2-material/sidenav/sidenav';
import {MdListModule} from '@angular2-material/list/list';
import {MdGridListModule} from '@angular2-material/grid-list/grid-list';
import {MdCardModule} from '@angular2-material/card/card';
import {MdIconModule} from '@angular2-material/icon/icon';
import {MdProgressCircleModule} from '@angular2-material/progress-circle/progress-circle';
import {MdProgressBarModule} from '@angular2-material/progress-bar/progress-bar';
import {MdInputModule} from '@angular2-material/input/input';
import {MdTabsModule} from '@angular2-material/tabs/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar/toolbar';
import {MdTooltipModule} from '@angular2-material/tooltip/tooltip';
import {MdRippleModule} from '@angular2-material/core/ripple/ripple';
import {PortalModule} from '@angular2-material/core/portal/portal-directives';
import {OverlayModule} from '@angular2-material/core/overlay/overlay-directives';
import {MdMenuModule} from '@angular2-material/menu/menu';
import {RtlModule} from '@angular2-material/core/rtl/dir';
import {SharedModule} from "./sharedModule/shared.module";
import {ProjectComponent} from "./projectManagement/project.component";
import {ProjectTableComponent} from "./projectManagement/projectTable/projectTable.component";
import {HeroListComponent} from "./hero-list.component";
import {ProjectTableService} from "./projectManagement/projectTable/projectTableService";
import {DataTable} from 'primeng/primeng';
import {Column} from 'primeng/primeng';
import {ProjectFormComponent} from "./projectManagement/projectTable/projectForm/project-form.component";
import {ProjectManagementModule} from "./projectManagement/project.module";
import {AppManagementComponent} from "./appManagement/app-management.component";
import {AppTableComponent} from "./appManagement/appTable/appTable.component";
import {AppUploadFormComponent} from "./appManagement/appTable/appUploadForm/app-upload-form.component";
import {AppTableService} from "./appManagement/appTable/appTableService";
import {ReportManagementComponent} from "./reportManagement/report-management.component";
import {ReportTableComponent} from "./reportManagement/reportTable/report-table.component";
import {ReportTableService} from "./reportManagement/reportTable/report-table-service";
import {ScriptManagementComponent} from "./scriptManagement/script-management.component";
import {ScriptTableComponent} from "./scriptManagement/scriptTable/script-table.component";
import {ScriptUploadFormComponent} from "./scriptManagement/scriptTable/scriptUploadForm/script-upload-form.component";
import {ScriptTableService} from "./scriptManagement/scriptTable/script-table-service";
import {TestManagementComponent} from "./testManagement/test-management.component";
import {TestTableComponent} from "./testManagement/testTable/test-table.component";
import {TestTableService} from "./testManagement/testTable/test-table-service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    JsonpModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressCircleModule,
    MdRadioModule,
    MdRippleModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    OverlayModule,
    PortalModule,
    RtlModule,
    // ProjectManagementModule,
    // SharedModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HeroListComponent,
    DashboardComponent,
    ProjectComponent,
    ProjectTableComponent,
    ProjectFormComponent,
    AppManagementComponent,
    AppTableComponent,
    AppUploadFormComponent,
    ReportManagementComponent,
    ReportTableComponent,
    ScriptManagementComponent,
    ScriptTableComponent,
    ScriptUploadFormComponent,
    TestManagementComponent,
    TestTableComponent,
  ],
  providers: [
    HeroService,
    // HTTP_PROVIDERS,
    ProjectTableService,
    AppTableService,
    ReportTableService,
    ScriptTableService,
    TestTableService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
