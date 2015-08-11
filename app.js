
var angular = require('angular');
require('angular-route');


var app = angular.module('repeatApp', [ 'ngRoute' ]);

//app.constant('VERSION', require('../package.json').version);

//require controllers
app.controller('BaseCtrl', require('./baseController'));


app.config(function($routeProvider) {
  'use strict';

  $routeProvider.when('/todos', {
    templateUrl: './base.html',
    controller: 'BaseCtrl',
  })
  .otherwise({
    redirectTo: '/todos',
  });
});
