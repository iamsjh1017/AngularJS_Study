mainApp.controller("menuController", function($scope) {
	$scope.restaurant = {
		name: "치킨",
		number: "010-1234-5678",
		web: "www.chicken.com",
		menuList: [
		    {name: "후라이드", price: 16000},
		    {name: "양념", price: 7000},
		    {name: "마늘", price: 3000},
		    {name: "반반", price: 10000}
		],
		
		phoneNumber: function() {
			var restaurantObject;
			restaurantObject = $scope.restaurant;
			return restaurantObject.number;
		},
		
		webSite: function() {
			var restaurantObject;
			restaurantObject = $scope.restaurant;
			return restaurantObject.web;
		}
	};
	$scope.reset = function() {
		$scope.restaurant.menuList = [
		    {name: "후라이드", price: 16000},
		    {name: "양념", price: 7000},
		    {name: "마늘", price: 3000},
		    {name: "반반", price: 10000}
		];
	};
	$scope.search = function() {
		$scope.restaurant.menuList = [
	       {name: "후라이드", price: 10000},
	       {name: "양념", price: 4000},
	       {name: "마늘", price: 1000},
	       {name: "반반", price: 5000}
	    ];
	};
	$scope.hoverIn = function() {
		this.hoverAlert = true;
	};
	$scope.hoverOut = function() {
		this.hoverAlert = false;
	};
});