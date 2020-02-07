import {ID} from "../../../_shared/shared.interfaces";

export interface IMenuItem {
  readonly _id: ID
  title: string
  description?: string
  parentId: ID
}

export interface IMenu {
  readonly _id: ID
  title: string
  description?: string
  items?: IMenuItem[]
}
