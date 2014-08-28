var myApp = angular.module('AngularDemo', ['allControllers', 'ngRoute', 'oauth']);


myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/2', {
        templateUrl: 'partial/2.html',
        controller: 'SimpleController'
      }).
      when('/3', {
        templateUrl: 'partial/3.html',
        controller: 'ProfileController'
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

angular.module('newProjectApp').config(function($locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
});
