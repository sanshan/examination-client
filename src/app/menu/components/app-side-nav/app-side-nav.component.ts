import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {MenuService} from "@menu/_service/menu.service"
import {MenuType} from "@app/graphql";

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

  /**
   * Объект меню
   */
  public menu: MenuType
  public loading: boolean = true

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.isHandset$ = this.menuService.isHandset$
    this.menuService.getMenuById('5e37fb3e33df579e48309ffd').subscribe((result) => {
      this.menu = result.data
      this.loading = result.loading
    })
  }

}
