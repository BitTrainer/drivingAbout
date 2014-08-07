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

      }else {
        GoogleAPI.auth.authorize(
             {'client_id': driveClientId, 'scope': driveScopes, 'immediate': false},
             onDriveAuthorised);
      }

      scope.$apply();

    }
  }]);
