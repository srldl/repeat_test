'use strict';

//Setting up controllers
var repeat_testControllers = angular.module('repeat-testControllers', []);


//Get species gallery for images, education/links to NPs home pages.
repeat_testControllers.controller('BaseCtrl', ['$scope', '$http', function( $scope, $http) {
   $scope.birds = ["bluethroat", "maillard", "swan"];
}]);
