'use strict';

/**
 * @ngdoc overview
 * @name drivingAboutApp
 * @description
 * # drivingAboutApp
 *
 * Main module of the application.
 */
angular
  .module('drivingAboutApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .constant('DRIVE_CLIENT_ID', '775721955671-io9c7iev7hn8mtr2i9qdnpegj39prko0.apps.googleusercontent.com')
  .constant('DRIVE_SCOPES',['https://www.googleapis.com/auth/drive',
                            'https://www.googleapis.com/auth/drive.file',
                            'https://www.googleapis.com/auth/drive.readonly',
                            'https://www.googleapis.com/auth/drive.metadata.readonly',
                            'https://www.googleapis.com/auth/drive.appdata',
                            'https://www.googleapis.com/auth/drive.apps.readonly'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/driveManager',{
        templateUrl: 'views/driveManager.html',
        controller: 'DrivemanagerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
