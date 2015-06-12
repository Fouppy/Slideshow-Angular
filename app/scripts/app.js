'use strict';

/**
 * @ngdoc overview
 * @name slideshowApp
 * @description
 * # slideshowApp
 *
 * Main module of the application.
 */
angular
  .module('slideshowApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
