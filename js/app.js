// Cargo la variable de mi aplicación con sus dependencias
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    
    $routeProvider

    // Ruta del home
    .when('/', {
        templateUrl : 'templates/home.html',
        controller  : 'mainController'
    })
    
    .otherwise({
        redirectTo: '/'
    });
    
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
});

// Controlador del inicio
app.controller('mainController', ['$scope','$http', function($scope, $http) {
    
    // ajax al archivo json
    $http({
        url: "js/file.json",
        method: "POST",
        params:{}
    }).success(function(res){
       $scope.datos = res;
    });
    
    setTimeout(function(){
        $('.collapsible').collapsible({
          accordion : false
        });
        
        iframes_event();
    },500);
}]);

function iframes_event(){
    $('iframe').each(function(i,e){
        var $e = $(e);
        $e.attr('src', $e.attr('data-url'));
    });
}