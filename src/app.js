'use strict';
var angular = require('angular');

// Angular modules
var angular_route = require('angular-route');

var app = angular.module('repeat-testApp',[
  'ngRoute',
  'repeat-testControllers'
]);

  console.log("test");

  // Controllers
//  app.controller('repeat_testControllers', require('repeat_testControllers'));
  var BaseCtrl = require('./controller.js');

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'index.html',
        controller: 'BaseCtrl',
      }).
      when('/index.html', {
        templateUrl: 'index.html',
        controller: 'BaseCtrl',
      }).
      when('/edit.html', {
        templateUrl: 'edit.html',
        controller: 'BaseCtrl',
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
