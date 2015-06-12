'use strict';

/**
 * @ngdoc function
 * @name slideshowApp.controller:SliderCtrl
 * @description
 * # SliderCtrl
 * Controller of the slideshowApp
 */
angular.module('slideshowApp')
  .controller('SliderCtrl', ['$scope', 'getPhotos', function ($scope, getPhotos) {
  	getPhotos.success(function(data) {
  	  $scope.images = data;
  	});
  }]);