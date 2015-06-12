'use strict';

/**
 * @ngdoc function
 * @name slideshowApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the slideshowApp
 */
angular.module('slideshowApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
