var myApp = angular.module('AngularDemo', ['allControllers', 'ngRoute']);


myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/2', {
        templateUrl: 'partial/2.html',
        controller: 'SimpleController'
      }).
      when('/1', {
        templateUrl: 'partial/1.html',
        controller: 'DataController'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partial/2.html',
        controller: 'DataController'
      }).
      otherwise({
        redirectTo: '/1'
      });
  }]);
