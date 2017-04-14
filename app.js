(function () { // Wrapping in a closure is a good habit.
  var app = angular.module('store', []); // A module

  app.controller('StoreController', function() { // Controller.  Name must be capital case.
    this.products = gems; // Make gem a property of the controller
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Product description',
      canPurchase: true,
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'PentaGem description',
      canPurchase: true,
      soldOut: false,
    }
  ];
})();