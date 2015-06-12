'use strict';

describe('Controller: SliderCtrl', function () {

  // load the controller's module
  beforeEach(module('slideshowApp'));

  var SliderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SliderCtrl = $controller('SliderCtrl', {
      $scope: scope
    });
  }));
});
