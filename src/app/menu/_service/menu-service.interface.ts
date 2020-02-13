import {Observable} from "rxjs"
import {MenuType} from "../../graphql";

export type TMenu = {
  data: MenuType
  loading: boolean
}

export interface IMenuService {
  isHandset$: Observable<boolean>

  getMenuById: (_id: string) => Observable<TMenu>
}
