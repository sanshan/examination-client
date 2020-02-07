import {NgModule} from '@angular/core'

import {CoreModule} from './core/core.module'
import {MenuModule} from './menu/menu.module'

import {AppComponent} from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
