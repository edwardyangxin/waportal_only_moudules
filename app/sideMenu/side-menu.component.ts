/**
 * Created by yxin on 8/18/2016.
 */
import {Component} from '@angular/core';
import {Menu, MenuItem} from "primeng/primeng";


@Component({
  moduleId: module.id,
  selector: 'side-menu',
  // pipes: [],
  // providers: [],
  directives: [Menu],
  // styleUrls: ['./device-management.component.css'],
  templateUrl: './side-menu.component.html'
})
export class SideMenuComponent {
  private items: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [{
      label: 'File',
      items: [
        {label: 'New', icon: 'fa-plus'},
        {label: 'Open', icon: 'fa-download'}
      ]
    },
      {
        label: 'Edit',
        items: [
          {label: 'Undo', icon: 'fa-refresh'},
          {label: 'Redo', icon: 'fa-repeat'}
        ]
      }];
  }

}
