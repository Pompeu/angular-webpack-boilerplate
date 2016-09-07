import menu from './menu';

describe('Menu', () => {
  let element, scope, $mdDialog, div;

  beforeEach(() => {
    angular.mock.module(menu);
    angular.mock.module('ngMaterial');
  });

  beforeEach(angular.mock.inject(($rootScope, $compile, _$mdDialog_) => {
    scope = $rootScope;
    element = angular.element('<div context item="item"></div>');
    scope.item = {
      title: 'title',
      body:  'body'
    };

    div = $compile(element)(scope);
    scope.$digest();
    $mdDialog = _$mdDialog_;

  }));

  describe('menu testing', () => {

    it('should be el trigge context menu', () => {
      spyOn($mdDialog, 'show');
      div.triggerHandler('contextmenu');
      expect($mdDialog.show).toHaveBeenCalled();
    });
  });
});
