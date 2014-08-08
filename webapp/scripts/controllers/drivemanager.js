'use strict';

/**
 * @ngdoc function
 * @name drivingAboutApp.controller:DrivemanagerCtrl
 * @description
 * # DrivemanagerCtrl
 * Controller of the drivingAboutApp
 */
angular.module('drivingAboutApp')
  .controller('DrivemanagerCtrl', [ '$scope', 'DRIVE_CLIENT_ID','DRIVE_SCOPES', function (scope, driveClientId, driveScopes) {
    scope.isDriveAuthFailure =false;
    scope.driveAuthErrorMessage = null;
    scope.isCheckingDriveAuth = true;
    scope.isDriveAuthorised = false;
    scope.invoices = null;

    scope.init = function() {
       if(!GoogleAPI) {
         notifyDriveAuthFailure('Google Client API did not load');
         return;
       }
       if(!GoogleAPI.auth) {
         notifyDriveAuthFailure('Google Client API Auth did not load');
         return;
       }
       GoogleAPI.auth.authorize(
            {'client_id': driveClientId, 'scope': driveScopes, 'immediate': true},
            onDriveAuthorised);
    };

    function notifyDriveAuthFailure(message) {
      scope.isCheckingDriveAuth = false;
      scope.driveAuthErrorMessage  = message;
      scope.isDriveAuthFailure = true;
      console.error(message);
    }

    function onDriveAuthorised(result) {
      scope.isCheckingDriveAuth = false;

      if(result && !result.error){
        scope.isDriveAuthorised = true;
        listInvoices();
      }else {
        GoogleAPI.auth.authorize(
             {'client_id': driveClientId, 'scope': driveScopes, 'immediate': false},
             onDriveAuthorised);
      }

      scope.$apply();

    }

  function listInvoices() {
    var request = GoogleAPI.client.request(
      {
        'path':'drive/v2/files',
        'params':{'q': '"0Bxof9R4288uzbTNtcGV5bWJIRWM" in parents'}
      }
    );
    var result = request.execute(function(result){
        scope.invoices = result.items || [{title:'No results'}];
        scope.$apply();
    });

  }
  }]);
