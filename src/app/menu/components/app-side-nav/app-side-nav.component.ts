import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {MenuService} from "../../_service/menu.service"
import {IMenu} from "../_shared/menu.interfaces"

@Component({
  selector: 'app-side-nav',
  templateUrl: './app-side-nav.component.html',
  styleUrls: ['./app-side-nav.component.scss']
})
export class AppSideNavComponent implements OnInit {

  /**
   * Стрим для слежения за размером экрана
   */
  public isHandset$: Observable<boolean>

  public menu$: IMenu

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.isHandset$ = this.menuService.isHandset$
    this.menuService.getMenuByID('5e37fb3e33df579e48309ffd').subscribe(({data}) => {
      this.menu$ = data.menu
    })
  }

}
