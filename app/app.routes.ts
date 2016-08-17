/**
 * Created by sevncz on 16-8-12.
 */

import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { Test1Component } from './test1.component';
import { Material2AppAppComponent } from './material2-app.component';

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },{
    path: 'test1',
    component: Test1Component
  },{
    path: 'material2-app',
    component: Material2AppAppComponent
  },
];

export const routing = RouterModule.forRoot(appRoutes);
