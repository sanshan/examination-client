import {Component, OnInit} from '@angular/core'
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout'
import {Observable} from 'rxjs'
import {map, shareReplay} from 'rxjs/operators'
import {Apollo} from 'apollo-angular'
import gql from 'graphql-tag'

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.scss']
})
export class MyNavComponent implements OnInit {
  menus: any[]
  loading = true
  error: any

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private apollo: Apollo
  ) {
  }

  ngOnInit(): void {

    const menu = gql`
          query menu($_id: ID){
            menu(_id: $_id){
              title
              description
            }
          }
        `

    this.apollo.watchQuery({
      query: menu,
      variables: {
        _id: '5e37faa81c9d440000959d5d'
      }
    }).valueChanges.subscribe(result => {
      // @ts-ignore
      this.menus = result.data && result.data.menu;
      this.loading = result.loading;
      this.error = result.errors;
      console.log(result)
    })
  }

}
