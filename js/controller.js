function SimpleController($scope)
{
    $scope.customers = [ 
        { name: 'sundar', age:10},
        {name: 'prem', age:20}
    ];
}

function DataController($scope, $http, $routeParams)
{
    $scope.phoneId = $routeParams.phoneId;
    $http.get('result.json').success(function(data){
        $scope.customers = data;
    });
}

function FormController($scope)
{
    $scope.formData = {};
    $scope.result = 'waiting...';

    $scope.submit = function(){
        console.log(this.formData);
        $scope.result = this.formData;
    }
}
var allControllers = angular.module('allControllers', []);

allControllers.controller('SimpleController', SimpleController);
allControllers.controller('DataController', DataController);
allControllers.controller('FormController', FormController);
