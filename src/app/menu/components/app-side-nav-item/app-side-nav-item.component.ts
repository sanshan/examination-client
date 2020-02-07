import {Component, Input, OnInit} from '@angular/core';
import {IMenuItem} from "../_shared/menu.interfaces";

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './app-side-nav-item.component.html',
  styleUrls: ['./app-side-nav-item.component.scss']
})
export class AppSideNavItemComponent implements OnInit {

  @Input()
  item: IMenuItem

  constructor() {
  }

  ngOnInit() {

  }

}
