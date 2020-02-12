import {Injectable} from '@angular/core'
import {Observable} from "rxjs"
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout"
import {map, shareReplay} from "rxjs/operators"
import {GetMenuByIdGQL, MenuType} from "@app/graphql"
import {IMenuService, TMenu} from './menu-service.interface'


@Injectable({
  providedIn: 'root'
})
export class MenuService implements IMenuService {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private getMenuByIdGQL: GetMenuByIdGQL
  ) {
  }

  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    )

  public getMenuById = (_id: string): Observable<TMenu> => this.getMenuByIdGQL.watch({_id}).valueChanges
    .pipe(
      map(result => {
        return {
          data: result.data.getMenuById as MenuType,
          loading: result.loading
        } as TMenu
      })
    )

}
