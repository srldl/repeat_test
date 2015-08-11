
var angular = require('angular');
require('angular-route');


var app = angular.module('repeatApp', [ 'ngRoute' ]);

//app.constant('VERSION', require('../package.json').version);

//require controllers
app.controller('BaseCtrl', require('./src/baseController'));


app.config(function($routeProvider) {
  'use strict';
  $routeProvider.when('/', {
    templateUrl: '/src/base.html',
    controller: 'BaseCtrl',
  })
  $routeProvider.when('/todos', {
    templateUrl: '/src/base.html',
    controller: 'BaseCtrl',
  })
  .otherwise({
    redirectTo: '/todos',
  });
});
