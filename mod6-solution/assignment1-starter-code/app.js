(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  	$scope.lunchMenu = "";
	$scope.message = "";
	$scope.fontColor = "";
	$scope.borderColor = "";

	 $scope.checkMenu = function () {

	 	var split = $scope.lunchMenu.split(",");

	 	var filteredArray = [];

	 	for(var i = 0; i < split.length; i++)
	 	{
	 		if(split[i] == "" || split[i] == " ")
	 		{
	 			// Do nothing, don't want in list
	 		}
	 		else
	 		{
				filteredArray.push(split[i]);
	 		}
	 	}


		if(filteredArray == "")
	 	{
	 		$scope.message = "Please enter data first";
	 		$scope.fontColor = "color: red;";
	 		$scope.borderColor = "border-style: solid; border-color: red;";
	 	}
	 	else if(filteredArray.length <= 3)
	 	{
			$scope.message = "Enjoy!";
			$scope.fontColor = "color: green;";
			$scope.borderColor = "border-style: solid; border-color: green;";
	 	}
	 	else if(filteredArray.length > 3)
	 	{
	 		$scope.message = "Too much!";
	 		$scope.fontColor = "color: green;";
	 		$scope.borderColor = "border-style: solid; border-color: green;";
	 	}
  	};
}

})();

