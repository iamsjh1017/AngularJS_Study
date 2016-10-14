var mainApp = angular.module("mainApp", []);
mainApp.controller("MenuController", function ($scope, $http) {
	$http({
		url: "/crud/chicken/list.json"
	})
	.success(function(data) {
		$scope.menuItems = data;
	});
	
	// input박스 리셋
	$scope.reset = function() {
		$scope.menu.name='';
		$scope.menu.price='';
	}
	
	$scope.addMenuItem = function() {
		$http({
			method: "POST",
			url: "/crud/chicken/insert.json",
			data: $.param({name: $scope.menu.name, price: $scope.menu.price}),
			headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
		})
		.success(function(data) {
			clearForm();
			$scope.menuItems = data;
		});
	}
	
	function clearForm() {
		$scope.menu.name='';
		$scope.menu.price='';
	}
	
	$scope.setSelected = function(name) {
		$('#editModal').modal();
//		$("#menu-name").val(name);
//		$scope.selected.name = name;
	}
	
	$scope.update = function() {
		$http({
			method: "POST",
			url: "/crud/chicken/update.json",
			data: $.param({name: $scope.selected.name, price: $scope.selected.price}),
			headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
		})
		.success(function(data) {
			$('#editModal').modal('hide');
			$scope.selected.name='';
			$scope.selected.price='';
			$scope.menuItems = data;
		});
	}
	
	$scope.delete = function() {
		$http({
			method: "POST",
			url: "/crud/chicken/delete.json",
			data: $.param({name: name}),
			headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
		})
		.success(function(data) {
			$('#editModal').modal('hide');
			$scope.selected.name='';
			$scope.selected.price='';
			$scope.menuItems = data;
		});
	}
});