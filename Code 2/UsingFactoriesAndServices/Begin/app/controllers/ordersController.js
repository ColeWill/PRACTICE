(function() {
    
    var OrdersController = function ($scope, $routeParams, customersService, appSettings) {
        var customerId = $routeParams.customerId;
        $scope.customer = null;
        $scope.appSettings = appSettings;
        
        function init() {
            $scope.customer = customersService.getCustomer(customerId);
        }
        init();
    };
    
    OrdersController.$inject = ['$scope', '$routeParams', 'customersService'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());