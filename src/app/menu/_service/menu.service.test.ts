import {TestBed} from "@angular/core/testing";
// Import Apollo Angular testing
import {ApolloTestingController, ApolloTestingModule} from 'apollo-angular/testing';
// Import from GraphQL Code Generator
import {GetMenuByIdDocument} from "../../graphql";
// Import MenuService
import {MenuService} from "./menu.service";
// Import type for menu
import {TMenu} from "./menu-service.interface";

describe('MenuService', () => {
  let apolloTestingController: ApolloTestingController;
  let menuService: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the ApolloClient mocking service
      imports: [ApolloTestingModule],
      // Provide the service-under-test
      providers: [MenuService]
    });

    // Inject test controller and service-under-test
    // as they will be referenced by each test.
    apolloTestingController = TestBed.inject(ApolloTestingController);
    menuService = TestBed.inject(MenuService);
  });

  /// MenuService method tests begin ///

  describe('#getMenuById', () => {
    let expectedMenu: TMenu;
    let mockMenu;
    let mockMenuId = '0';
    let getMenuByIdMethod;

    beforeEach(() => {
      mockMenu = {
        _id: "0",
        title: "Test menu title 0",
        description: "Test menu description 0",
        items: [
          {
            _id: "0",
            title: "Test menu item title 0",
            description: "Test menu item description 0"
          },
          {
            _id: "1",
            title: "Test menu item title 0",
            description: "Test menu item description 0"
          }
        ]
      };
      expectedMenu = {data: mockMenu, loading: false};
      getMenuByIdMethod = menuService.getMenuById;
    });

    test('correct parameter should present in operation', () => {
      getMenuByIdMethod(mockMenuId).subscribe(
        (menu) => expect(menu).toEqual(expectedMenu, 'should return expected menu'),
        fail
      );

      // MenuService should have made one request to get menu by ID from expected Document
      const op = apolloTestingController.expectOne(GetMenuByIdDocument);
      expect(op.operation.variables._id).toEqual(mockMenuId, `_id: ${mockMenuId} should present in operation`);

    });

    test('should return expected menu (called once)', () => {
      getMenuByIdMethod(mockMenuId).subscribe(
        (menu) => expect(menu).toEqual(expectedMenu, 'should return expected menu'),
        fail
      );

      // MenuService should have made one request to get menu by ID from expected Document
      const op = apolloTestingController.expectOne(GetMenuByIdDocument)

      // Respond with the mock menu
      op.flush({
        data: {
          getMenuById: mockMenu
        },
      });
    });

    test('should be OK returning no menu', () => {
      const mockWrongMenuId = 42

      getMenuByIdMethod(mockWrongMenuId).subscribe(
        (menu) => expect(menu.data).toEqual(null, 'should return null'),
        fail
      );

      // MenuService should have made one request to get menu by ID from expected Document
      const op = apolloTestingController.expectOne(GetMenuByIdDocument)

      // Respond with the mock menu
      op.flush({
        data: {
          getMenuById: null
        },
      });

    });

  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    apolloTestingController.verify();
  });

});
