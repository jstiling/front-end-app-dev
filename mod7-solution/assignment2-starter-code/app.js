(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

.filter('filter',function()
{
    return function(input)
    {
        return "$$$" + input;
    }
});

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var toBuyList = this;
	var shoppingList = ShoppingListCheckOffService;

	toBuyList.buyItem = function(itemIndex){
		shoppingList.buyItem(itemIndex);
	}

	toBuyList.toBuyItems = ShoppingListCheckOffService.getItemsToBuy();

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

	var boughtList = this;
	var shoppingList = ShoppingListCheckOffService;
  	
	boughtList.boughtItems = ShoppingListCheckOffService.getItemsBought();
  	
}

ShoppingListCheckOffService.$inject = [];
function ShoppingListCheckOffService() {

 	var service = this;
  	service.toBuy = [{ name: "cookies", quantity: 10 , pricePerItem: 1}, 
  					 { name: "milk", quantity: 1 , pricePerItem: 3}, 
  					 { name: "chips", quantity: 5 , pricePerItem: 1},
  					 { name: "crackers", quantity: 4 , pricePerItem: 2},
  					 { name: "apples", quantity: 3 , pricePerItem: 2}];
  	service.bought = [];

  	service.buyItem = function(itemIndex){
		service.bought.push(service.toBuy[itemIndex]);
		service.removeItem(itemIndex)
	}

	service.removeItem = function (itemIndex) {
    	service.toBuy.splice(itemIndex, 1);
  	};

    service.getItemsToBuy = function () {
    	return service.toBuy;
  	};

  	service.getItemsBought = function () {
    	return service.bought;
  	};
	
  	
}

})();

