(function(){
    var app = angular.module('customersApp', ['ngRoute']);
    app.config(function($routeProvider){
        $routeProvider
            .when('/',{
                controller: 'CustomersController',
                templateUrl: 'app/views/customers.html'
            })
            .when('/orders/:customersId', {
                contoroller: 'OrdersController',
                templateUrl: 'app/views/orders.html'
            }).otherwise({redirecTo: '/'});
    });
}());