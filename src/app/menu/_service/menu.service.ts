import {Injectable} from '@angular/core'
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {MenuByIdGQL, MenuByIdGQLResponse} from "../../graphql/services/MenuByIdGQL.service";
import {ApolloQueryResult} from "apollo-client";

@Injectable({
  providedIn: 'root'
})
// export class MenuService implements MenuServiceInterface {
export class MenuService {
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
   * Получаем данные меню по ID
   *
   * @param _id
   */
  // public getMenuByID(_id: string) {
  //   return this.menuByIdGQL.subscribe()
  // }
  public getMenuByID(_id: string): Observable<ApolloQueryResult<MenuByIdGQLResponse>> {
    return this.menuByIdGQL.watch({_id}).valueChanges
  }

}
