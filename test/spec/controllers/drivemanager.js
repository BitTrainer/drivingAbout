'use strict';

describe('Controller: DrivemanagerCtrl', function () {

  // load the controller's module
  beforeEach(module('drivingAboutApp'));

  var DrivemanagerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DrivemanagerCtrl = $controller('DrivemanagerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
