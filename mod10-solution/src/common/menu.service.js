(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getMenuItem = function(shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json')
    .then(function(response) {
      return response.data;
    });
  };

}

})();
