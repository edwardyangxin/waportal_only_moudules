import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';
import {HTTP_PROVIDERS} from '@angular/http';

import { AppComponent }  from './app.component';
import { routing } from './app.routes';

import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

import { HeroService }  from './hero.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService,
    HTTP_PROVIDERS
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
