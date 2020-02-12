import {ApolloTestingController, ApolloTestingModule,} from 'apollo-angular/testing';
import {TestBed} from "@angular/core/testing";
import {AppSideNavComponent} from "@menu/components/app-side-nav/app-side-nav.component";

describe('Tests for MenuService:', () => {

  let backend: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [ApolloTestingController]
    });

    // backend = TestBed.inject()
  });

  it('expect and answer', function () {
    TestBed.createComponent(AppSideNavComponent)


  });

  afterEach(() => {
    backend.verify();
  });

});
