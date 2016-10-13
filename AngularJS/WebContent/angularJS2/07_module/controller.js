/**
 * 
 */
mainApp.controller("menuController", function ($scope) {
	$scope.restaurant= {
			name : "솔라",
		  number : "010-1111-1111",
		menuList : [
		            {name:"후라이드치킨", price:16000},
		            {name:"양념치킨", price:17000},
		            {name:"마늘치킨", price:17000},
		            {name:"반반치킨", price:17000}
		            ],
	 phoneNumber : function () {
		var restaurantObject;
		restaurantObject = $scope.restaurant;
		return restaurantObject.number;
	 }
	};
});