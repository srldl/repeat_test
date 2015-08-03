'use strict';
var angular = require('angular');

// Angular modules
var angular_route = require('angular-route');


var app = angular.module('repeat-testApp',[
  'ngRoute',
  'repeat-testControllers'
]);

  console.log("test");

  require('./controller');



  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'index.html',
        controller: 'BaseCtrl',
      }).
      when('/project', {
        templateUrl: 'src/edit.html',
        controller: 'BaseCtrl',
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
