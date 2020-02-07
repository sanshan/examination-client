import {Observable} from "rxjs"
import {ApolloQueryResult} from "apollo-client"

// Надо сделать алиас
import {IMenuByIdGQL} from "../../graphql/services/MenuByIdGQL.service"

export interface MenuServiceInterface {
  isHandset$: Observable<boolean>

  getMenuByID(_id: string): Observable<ApolloQueryResult<IMenuByIdGQL>>
}
