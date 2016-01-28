'use strict';

/**
 * @ngdoc overview
 * @name simonApp
 * @description
 * # simonApp
 *
 * Main module of the application.
 */
angular
  .module('simonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/simon.html',
        controller: 'SimonCtrl',
        controllerAs: 'simon'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
