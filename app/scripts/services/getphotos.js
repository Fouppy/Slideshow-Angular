'use strict';

/**
 * @ngdoc service
 * @name slideshowApp.getPhotos
 * @description
 * # getPhotos
 * Factory in the slideshowApp.
 */
angular.module('slideshowApp')
  .factory('getPhotos', ['$http', function ($http) {
    // Service logic
    return $http.get('data/photos.json')
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
  }]);