import gql from 'graphql-tag';
import {Injectable} from '@angular/core';
import * as Apollo from 'apollo-angular';

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};


export type MenuItemType = {
  __typename?: 'MenuItemType',
  _id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  parent?: Maybe<Scalars['Int']>,
  menuId?: Maybe<Scalars['Int']>,
};

export type MenuType = {
  __typename?: 'MenuType',
  _id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  items?: Maybe<Array<Maybe<MenuItemType>>>,
};

export type RootQuery = {
  __typename?: 'RootQuery',
  getMenuById?: Maybe<MenuType>,
  getAllMenus?: Maybe<Array<Maybe<MenuType>>>,
  getAllMenuItems?: Maybe<Array<Maybe<MenuItemType>>>,
};


export type RootQueryGetMenuByIdArgs = {
  _id?: Maybe<Scalars['ID']>
};

export type GetAllMenusQueryVariables = {};


export type GetAllMenusQuery = (
  { __typename?: 'RootQuery' }
  & {
  getAllMenus: Maybe<Array<Maybe<(
    { __typename?: 'MenuType' }
    & Pick<MenuType, '_id' | 'title' | 'description'>
    & {
    items: Maybe<Array<Maybe<(
      { __typename?: 'MenuItemType' }
      & Pick<MenuItemType, '_id' | 'title' | 'description' | 'parent'>
      )>>>
  }
    )>>>
}
  );

export type GetMenuByIdQueryVariables = {
  _id?: Maybe<Scalars['ID']>
};


export type GetMenuByIdQuery = (
  { __typename?: 'RootQuery' }
  & {
  getMenuById: Maybe<(
    { __typename?: 'MenuType' }
    & Pick<MenuType, '_id' | 'title' | 'description'>
    & {
    items: Maybe<Array<Maybe<(
      { __typename?: 'MenuItemType' }
      & Pick<MenuItemType, '_id' | 'title' | 'description'>
      )>>>
  }
    )>
}
  );

export const GetAllMenusDocument = gql`
  query getAllMenus {
    getAllMenus {
      _id
      title
      description
      items {
        _id
        title
        description
        parent
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetAllMenusGQL extends Apollo.Query<GetAllMenusQuery, GetAllMenusQueryVariables> {
  document = GetAllMenusDocument;

}

export const GetMenuByIdDocument = gql`
  query getMenuById($_id: ID) {
    getMenuById(_id: $_id) {
      _id
      title
      description
      items {
        _id
        title
        description
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class GetMenuByIdGQL extends Apollo.Query<GetMenuByIdQuery, GetMenuByIdQueryVariables> {
  document = GetMenuByIdDocument;

}
