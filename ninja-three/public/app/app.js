'use strict';

/* App Module */

angular.module('ninja-3', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  		when('/', {
  	  		templateUrl: '/partials/home',
  	  		controller: ninjaController
  	  	}).
      	when('/test', {
      		templateUrl: '/partials/test',
      		controller: ninjaController
      	}).
      	when('/fail', {
      		templateUrl: '/404'
      	}).
      	otherwise({redirectTo: '/'});
}]);


//init app module and declare it's dependencies on other modules
// angular.module('myapp', ['myapp.controllers'])
// 	.config(['$routeProvider', function ($routeProvider) {
//     $routeProvider.when('/', {
//         templateUrl: 'partials/index',
//         controller: 'IndexController'
//     }).otherwise({
//         redirectTo: '/'
//     });
// }]).config(['$locationProvider', function($locationProvider) {
//     $locationProvider.html5Mode(true);
// }]);