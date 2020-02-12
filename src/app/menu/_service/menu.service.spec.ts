import {ApolloTestingController, ApolloTestingModule,} from 'apollo-angular/testing';
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {AppSideNavComponent} from "@menu/components/app-side-nav/app-side-nav.component";
import {GetMenuByIdDocument} from "@app/graphql";

describe('Tests for MenuService:', () => {

  let backend: ApolloTestingController;
  let component: AppSideNavComponent;
  let fixture: ComponentFixture<AppSideNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [ApolloTestingController],
    });

    backend = TestBed.inject(ApolloTestingController);

    fixture = TestBed.createComponent(AppSideNavComponent);
    component = fixture.componentInstance;

  });

  it('expect and answer', function () {

    component.getMenu('5e37fb3e33df579e48309ffd').subscribe((menu) => {
      expect(menu.data.title).toEqual('Test menu');
    });


    const op = backend.expectOne(GetMenuByIdDocument);

    op.flush({
      data: {
        menu: {
          _id: 0,
          title: 'Test menu'
        }
      }
    })

  });

  afterEach(() => {
    backend.verify();
  });

});
