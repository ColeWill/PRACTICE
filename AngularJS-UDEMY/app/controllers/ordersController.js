(function(){

    var OrdersController  = function($scope, $routeParams){
        
        var customersId = $routeParams.customerId;
        $scope.orders = null;

        // search the customers for the customer ID

     function init(){
         for (var i =0, 
            len = $scope.customers.length; 
            i <len; 
            i ++ ){
             if ($scope.customer[i].id === parseInt(customersId)) {
                 $scope.orders = $scope.customers[i].orders;
                 break;
              };
         };
     }

        $scope.customers = [
            {
                id: 1,
                joined: '1987-12-3',
                name: 'bunson',
                city: 'Littleron',
                orderTotal: 84.23432,
                orders: [
                    {
                        id: 5,
                        product: 'Juice',
                        total: 34.23423
                    }
                    
                ]
            },
            {
                id: 2,
                joined: '2004-12-2',
                name: 'Brixton',
                city: 'Denver',
                orderTotal: 12.123123,
                orders: [
                    {
                        id: 4,
                        product: 'SARMS',
                        total: 123.56756
                    }
                    
                ]
            },
            {
                id: 3,
                joined: '2018-12-6',
                name: 'bentley',
                city: 'Ottowa',
                orderTotal: 49.33432,
                orders: [
                    {
                        id: 1,
                        product: 'GW',
                        total: 1.23121
                    }
                    
                ]
            },
            {
                id: 4,
                joined: '1999-12-5',
                name: 'Van OtterLoo',
                city: 'San Diego',
                orderTotal: 12.222,
                orders: [
                    {
                        id: 3,
                        product: 'BPC-157',
                        total: 234.56546
                    }
                    
                ]
            }
        ];

        init();
    };
    OrdersController.$inject = ['$scope' , '$routeParams'];

    angular.module('customersApp').controller('OrdersController', OrdersController);

}());