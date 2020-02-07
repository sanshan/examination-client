import {Observable} from "rxjs";
import {IMenu} from "../components/_shared/menu.interfaces";

export interface MenuServiceInterface {
  isHandset$: Observable<boolean>

  getMenuByID(_id: string): Observable<IMenu>
}
