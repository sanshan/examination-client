import {Injectable} from '@angular/core'
import {Observable} from "rxjs"
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout"
import {map, shareReplay} from "rxjs/operators"
import {GetMenuByIdGQL} from "@app/graphql";


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  /**
   * Стрим для слежения за размером экрана
   */
  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private getMenuByIdGQL: GetMenuByIdGQL
  ) {
  }

  /**
   * Получаем меню по ID
   *
   * @param _id
   */
  public getMenuByID(_id: string) {
    return this.getMenuByIdGQL.watch({_id}).valueChanges
  }

}
