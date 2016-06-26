(function(){
  var app = angular.module('shoeStore', []);

  app.controller('ShoeStoreController', function() {
    this.products = shoes;
  });

  var shoes = [
    {
      name: 'greyder',
      price: 40.0,
      type: 'casual',
      description: 'this shoe is constructed with hovercraft technology.',
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'salomon',
      price: 120.0,
      type: 'tracking',
      description: 'this shoe can be used for tracking.',
      canPurchase: false,
      soldOut: true
    }
  ]
})();
