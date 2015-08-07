'use strict';

//Setting up controllers
var repeat_testControllers = angular.module('repeat-testControllers', []);


//Get species gallery for images, education/links to NPs home pages.
repeat_testControllers.controller('BaseCtrl', function($scope) {
   $scope.choices = ["bluethroat", "maillard", "swan"];
   //$scope.choices = [{id:"bluthroat",color:"blue, grey, red, white"},
   //{id:"maillard", color:"black, green, blue"},{id:"swan", color:"white"}];
//   console.log($scope.choices);

//   $scope.addNewChoice = function() {
//  var newItemNo = $scope.choices.length+1;
//  $scope.choices.push({'id':'choice'+newItemNo});
//};
});

module.exports = repeat_testControllers;
module.exports = BaseCtrl;
