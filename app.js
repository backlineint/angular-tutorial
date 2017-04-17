(function () { // Wrapping in a closure is a good habit.
  var app = angular.module('store', []); // A module

  app.controller('StoreController', function() { // Controller.  Name must be capital case.
    this.products = gems; // Make gem a property of the controller
  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    }
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'Product description',
      canPurchase: true,
      images: [
        {
          full: 'http://fillmurray.com/g/200/300',
          thumb: 'http://fillmurray.com/g/200/300',
        },
        {
          full: 'http://fillmurray.com/g/200/300',
          thumb: 'http://fillmurray.com/g/200/300',
        },
      ],
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'PentaGem description',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'http://fillmurray.com/g/200/300',
          thumb: 'http://fillmurray.com/g/200/300',
        },
        {
          full: 'http://fillmurray.com/g/200/300',
          thumb: 'http://fillmurray.com/g/200/300',
        },
      ],
    }
  ];
})();