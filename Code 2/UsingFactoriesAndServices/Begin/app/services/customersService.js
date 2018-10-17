(function () {
  console.log('customersService.js is loading');
  var customersService = function () { 
  
    
    this.getCustomers = function () {
      return customers;
    };
    console.log('customers ', customers);

    this.getCustomer = function (customerId) { 
      console.log('customerId: ' + customerId);
      for (var i = 0, len = customers.lenght; i < len; i++) { 
        console.log('inside of for loop');
        if (customers[i].id === parseInt(customerId)) { 
          return customers[i];
        }
      }
    }
  }  
  angular.module('customersApp').service('customersService', customersService);
 }());