'use strict';

/* Controllers */

angular.module('ninjaThree.controllers', []).

controller('ninjaController', function($scope, $http) {

  $(document).on('keyup', function() {
    var tylerAPIUrl = '/api?min=' + $scope.minOut;
    console.log(tylerAPIUrl);
    $http.get(tylerAPIUrl).
      success( function(data) {
      $scope.asteroids = data;
      console.log(data);
    
    }).error( function(r,t,et){
      console.log('lolumad?');
      console.log(r);
      console.log(t);
      console.log(et);
    });
    console.log($scope.minOut);
  });
});