(function(){
  var app = angular.module('shoeStore', []);

  app.controller('ShoeStoreController', function() {
    this.products = shoes;
  });

  var shoes = [
    {
      name: 'greyder',
      imagePath: 'images/greyder.jpg',
      price: 40.5,
      type: 'casual',
      description: 'this shoe is constructed with hovercraft technology.',
      releaseDate: 1388123412323,
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'salomon',
      imagePath: 'images/salomon.jpg',
      price: 120.0,
      type: 'tracking',
      description: 'this shoe can be used for tracking.',
      releaseDate: 1398123412323,
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'adidas',
      imagePath: 'images/adidas.jpg',
      price: 80.0,
      type: 'sports',
      description: 'this shoe can be used for daily exercises.',
      releaseDate: 1399123412323,
      canPurchase: true,
      soldOut: false
    }
  ]
})();
