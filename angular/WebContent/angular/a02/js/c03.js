angular
.module('myApp', [])

// controller here
.controller('FirstCtrl', function ($scope) {
	$scope.data = {message: "Hello"};
});

//.controller('FirstCtrl', ['$scope', function ($scope) {
//	$scope.data = {message: "Hello"};
//}]);

//.controller('FirstCtrl', FirstCtrl);
//
//function FirstCtrl($scope) {
//    $scope.data = {message: "Hello"};
//};