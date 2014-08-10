'use strict';

describe('Controller: CustomermanagerCtrl', function () {

  // load the controller's module
  beforeEach(module('drivingAboutApp'));

  var CustomermanagerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomermanagerCtrl = $controller('CustomermanagerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
