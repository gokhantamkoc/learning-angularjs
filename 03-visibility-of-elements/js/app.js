(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.product = shoe;
  });

  var shoe = {
    name: 'greyder',
    price: 40.0,
    type: 'casual',
    description: 'this shoe is constructed with hovercraft technology.',
    canPurchase: true,
    soldOut: false
  }
})();
