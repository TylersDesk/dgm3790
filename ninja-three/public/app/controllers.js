'use strict';

/* Controllers */

function ninjaController($scope, $http) {
  $http.jsonp('http://web-app.usc.edu/ws/webcams/api/tommycam?callback=JSON_CALLBACK',
    {
        dataType: 'jsonp',
        method: 'POST',
        data: '',
        headers: {
            "Content-Type": "application/json"
        }
    }).success(function(data) {
    //$scope.phones = data;
      console.log(data);
      $scope.badges = data.data.badges;
      theData = data.data.badges;

  });

  $scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', '$http'];
