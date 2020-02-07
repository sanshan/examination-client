import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {BrowserModule} from '@angular/platform-browser'
import {RoutingModule} from '../routing/routing.module'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {GraphQLModule} from '../graphql/graphql.module'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule
  ]
})
export class CoreModule {
}
