(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)

function FoundItemsDirective() {
  var ddo = {
    templateUrl: "foundItems.html",
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'nar',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

  var nar = this;

  nar.searchTerm = "";
  nar.foundItems = [];

  var service = MenuSearchService;

  nar.search = function()
  {
      service.getMatchedMenuItems(nar.searchTerm).then(function(result){
        nar.foundItems = result;
      });
  };

  nar.removeItem = function (itemIndex) {
     nar.foundItems.splice(itemIndex, 1);
  };
}

function MenuSearchService($http) {

 	var service = this;

	service.getMatchedMenuItems = function (searchTerm) {

    return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json").then(function (result) {
        // process result and only keep items that match
        var foundItems = [];

        var items = result.data["menu_items"];

        for(var i = 0; i <items.length; i++)
        {
          if(items[i].description.includes(searchTerm))
          {
            foundItems.push(items[i]);
          }
        }
        // return processed items
        return foundItems;
    });

	};
  	
}

})();

