// Wrapping with an IIFE keeps this out of the globale scope

// (function(){
//     angular.module('customersApp')
//         .controller('CustomersController', function($scope){
//                 $scope.sortBy = name;
//                 $scope.reverse = false;
//                 $scope.customers = 
//                     [
//                         {joined: '2000-12-18', name: 'bee', city: 'Las Vegas', orderTotal: '12.34'},
//                         {joined: '2000-12-12', name: 'claier', city: 'ShoeTown', orderTotal: '123.44'},
//                         {joined: '2000-12-07', name: 'Nadia', city: 'Horeville', orderTotal: '123.657'},
//                         {joined: '2000-12-06', name: 'Xanthum', city: 'Starbucks', orderTotal: '45.78'},
//                         {joined: '2000-12-05', name: 'Frog', city: 'Louisville', orderTotal: '98.67'},
//                         {joined: '2000-12-04', name: 'Wax', city: 'Miami', orderTotal: '56.34'},
//                         {joined: '2000-12-03', name: 'Rodrigo', city: 'San Diego', orderTotal: '34.34'}
//                     ];
//                 $scope.doSort = function(propName){
//                     $scope.sortBy = propName;
//                     $scope.reverse  = !$scope.reverse;
//                 }
//     });
// }());

// option #2

(function(){
    
        var CustomersController = function($scope){
                    $scope.sortBy = name;
                    $scope.reverse = false;
                    $scope.customers = 
                        [
                            {joined: '2000-12-18', name: 'bee', city: 'Las Vegas', orderTotal: '12.34'},
                            {joined: '2000-12-12', name: 'claier', city: 'ShoeTown', orderTotal: '123.44'},
                            {joined: '2000-12-07', name: 'Nadia', city: 'Horeville', orderTotal: '123.657'},
                            {joined: '2000-12-06', name: 'Xanthum', city: 'Starbucks', orderTotal: '45.78'},
                            {joined: '2000-12-05', name: 'Frog', city: 'Louisville', orderTotal: '98.67'},
                            {joined: '2000-12-04', name: 'Wax', city: 'Miami', orderTotal: '56.34'},
                            {joined: '2000-12-03', name: 'Rodrigo', city: 'San Diego', orderTotal: '34.34'}
                        ];
                    $scope.doSort = function(propName){
                        $scope.sortBy = propName;
                        $scope.reverse  = !$scope.reverse;
                    }
        };

        
        angular.module('customersApp')
            .controller('CustomersController', CustomersController);

    }());
