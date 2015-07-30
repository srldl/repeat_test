
var myApp = angular.module('myApp', []);

myApp.controller('baseCtrl', function ($scope) {
  $scope.birds = [
    {'name': 'cormorant',
     'food': 'Fish eater',
     'age': 'black'},
    {'name': 'swan',
     'food': 'Plant eater',
     'color': 'white'},
    {'name': 'maillard',
     'food': 'Plant eater',
     'color': 'grey/orange'}
  ];

});