function PhoneListController($scope, $http) {
	$http.get("sample.json")
	.success(function (data) {
		$scope.phones = data;
	})
	$scope.orderProperty = "no";
};