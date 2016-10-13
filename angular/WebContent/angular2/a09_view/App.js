var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/addMenu', {
		templateUrl: 'addMenu.html',
		controller: 'AddMenuController'
	})
	.when('/viewMenu', {
		templateUrl: 'viewMenu.html',
		controller: 'ViewMenuController'
	})
	.otherwise({
		redirectTo: '/addMenu'
	});
}]);

mainApp.controller('AddMenuController', function($scope) {
	$scope.message = "메뉴 추가하는 페이지";
});

mainApp.controller('ViewMenuController', function($scope) {
	$scope.message = "메뉴 보여주는 페이지";
})