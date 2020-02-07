import {Injectable} from '@angular/core'
import {Observable} from "rxjs"
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout"
import {map, shareReplay} from "rxjs/operators"
import {IMenuByIdGQL, MenuByIdGQL} from "@app/graphql/services/MenuByIdGQL.service"
import {ApolloQueryResult} from "apollo-client"
import {MenuServiceInterface} from "./menu-service.interface"

@Injectable({
  providedIn: 'root'
})
export class MenuService implements MenuServiceInterface {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private menuByIdGQL: MenuByIdGQL
  ) {
  }

  /**
   * Стрим для слежения за размером экрана
   */
  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  /**
   * Получаем меню по ID
   *
   * @param _id
   */
  public getMenuByID(_id: string): Observable<ApolloQueryResult<IMenuByIdGQL>> {
    return this.menuByIdGQL.watch({_id}).valueChanges
  }

}
