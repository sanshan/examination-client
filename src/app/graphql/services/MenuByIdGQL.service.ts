// import {Injectable} from "@angular/core"
// import {Query} from "apollo-angular"
// import gql from "graphql-tag"
// import {IMenu} from "@menu/components/_shared/menu.interfaces"
//
// export interface IMenuByIdGQL {
//   menu: IMenu
// }
//
// @Injectable({
//   providedIn: 'root'
// })
// export class MenuByIdGQL extends Query<IMenuByIdGQL> {
//   document = gql`
//       query menu($_id: ID){
//         menu(_id: $_id){
//           _id
//           title
//           description
//           items {
//             _id
//             title
//             description
//           }
//         }
//       }
//     `
// }
