/**
 * Created by sevncz on 16-8-12.
 */

import {Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {InputText, Button, TabMenu, MenuItem} from 'primeng/primeng';


@Component({
  moduleId: module.id,
  selector: 'material2-app-app',
  templateUrl: 'test1.component.html',
  styleUrls: ['test1.component.css'],
  directives: [InputText, Button, TabMenu]
})

export class Test1Component implements OnInit{
  private items: MenuItem[];

  private activeItem: MenuItem;

  onclick() {
    console.log("click")
  }

  ngOnInit() {
    this.items = [
      {label: '百度', icon: 'fa-bar-chart', url: 'http://www.baidu.com'},
      {label: 'heroes', icon: 'fa-calendar', routerLink: ['/heroes']},
      {label: 'Documentation', icon: 'fa-book'},
      {label: 'Support', icon: 'fa-support'},
      {label: 'Social', icon: 'fa-twitter'}
    ];

    this.activeItem = this.items[2];
  }

}
