(function(){
  var app = angular.module('shoeStore', []);

  app.controller('ShoeStoreController', function() {
    this.product = shoe;
  });

  var shoe = {
    name: 'greyder',
    price: 40.0,
    type: 'casual',
    description: 'this shoe is constructed with hovercraft technology.'
  }
})();
