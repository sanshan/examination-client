import {Component, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {MenuService} from "@menu/_service/menu.service";
import {MenuType} from "@app/graphql";

@Component({
  selector: 'app-side-nav',
  templateUrl: './app-side-nav.component.html',
  styleUrls: ['./app-side-nav.component.scss'],
})
export class AppSideNavComponent implements OnInit {
  /**
   * Стрим для слежения за размером экрана
   */
  public isHandset$: Observable<boolean>;

  /**
   * Объект меню
   */
  @Output() public menu: MenuType;

  public loading: boolean = true;

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.isHandset$ = this.getHandset();
    this.getMenu('5e37fb3e33df579e48309ffd').subscribe((result) => {
      this.menu = result.data;
      this.loading = result.loading;
    });
  }

  /**
   * Получаем стрим размера экрана из сервиса
   */
  private getHandset() {
    return this.menuService.isHandset$;
  }

  /**
   * Получаем стрим с данными из сервиса
   *
   * @param _id
   */
  private getMenu(_id: string) {
    return this.menuService.getMenuById(_id);
  }

}
