'use strict';

/* App Module */
angular.module('ninjaThree', [
  'ninjaThree.controllers',
  'ninjaThree.directives'
]).
config(function($routeProvider,$locationProvider) {
  $routeProvider.
		when('/', {
  		templateUrl: '/partials/home',
  		controller: 'ninjaController'
  	}).
  	otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});

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