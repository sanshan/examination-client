import {NgModule} from '@angular/core'
import {CommonModule} from "@angular/common"

import {LayoutModule} from '@angular/cdk/layout'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'

import {AppSideNavComponent} from '@menu/components/app-side-nav/app-side-nav.component'
import {AppSideNavItemComponent} from '@menu/components/app-side-nav-item/app-side-nav-item.component'
import {ApolloModule} from "apollo-angular"

@NgModule({
  declarations: [
    AppSideNavComponent,
    AppSideNavItemComponent
  ],
  imports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    ApolloModule
  ],
  exports: [
    AppSideNavComponent
  ]
})
export class MenuModule {
}
