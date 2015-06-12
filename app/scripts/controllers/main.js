'use strict';

/**
 * @ngdoc function
 * @name slideshowApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the slideshowApp
 */
angular.module('slideshowApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
