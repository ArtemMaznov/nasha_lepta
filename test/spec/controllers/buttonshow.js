'use strict';

describe('Controller: ButtonshowCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var ButtonshowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ButtonshowCtrl = $controller('ButtonshowCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
