(function(){
  var app = angular.module('shoeStore', []);

  app.controller('ShoeStoreController', function() {
    this.products = shoes;
  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.isSelectedTab = function(tabNumber) {
      return this.tab === tabNumber;
    };

    this.selectTab = function(tabNumber) {
      this.tab = tabNumber;
    };
  });

  app.controller('CommentController', function(){
    this.comment = {};

    this.addComment = function(shoe) {
      shoe.comments.push(this.comment);
      this.comment = {};
    };
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
      soldOut: false,
      comments: [
        {
            rating: 5,
            body: "I love this product",
            author: "Thomas Joe"
        },
        {
            rating: 4,
            body: "The product is okay.",
            author: "Mike Brown"
        }
      ]
    },
    {
      name: 'salomon',
      imagePath: 'images/salomon.jpg',
      price: 120.0,
      type: 'tracking',
      description: 'this shoe can be used for tracking.',
      releaseDate: 1398123412323,
      canPurchase: true,
      soldOut: false,
      comments: []
    },
    {
      name: 'adidas',
      imagePath: 'images/adidas.jpg',
      price: 80.0,
      type: 'sports',
      description: 'this shoe can be used for daily exercises.',
      releaseDate: 1399123412323,
      canPurchase: true,
      soldOut: false,
      comments: []
    }
  ]
})();
