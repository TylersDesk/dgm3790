'use strict';

angular.module('ninjaThree.directives', []).
directive('hello', function () {
    return {
        restrict: 'E',
        template: '<p>Hello from directive</p>'
    };
}).directive('endrepeatfire', function() {
  return function(scope, element, attrs) {
  	console.log('look I fired');
    if (scope.$last){
      $(".my_circle").tooltip({
      'container': 'body',
      'placement': 'top'
      }); // this works!
    }
  };
});