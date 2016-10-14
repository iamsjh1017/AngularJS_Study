/**
 * 
 */
var mainApp = angular.module("mainApp",[]);

mainApp.controller("MenuController", function ($scope, $http) {
	$http({
		method  : "POST",
		url     : "/angular/chicken/getMenu.do"
	})
	.success(function(data) {
		$scope.menuItems = data;
	});
	
	$scope.reset = function() {
		clearData();
	}
	
	$scope.addMenuItem = function () {
		$http({
			url : "/angular/chicken/writeMenu.do",
		 method : "POST",
		   data : $.param({name:$scope.menu.name,price:$scope.menu.price}),
		headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
		})
		.success(function(data) {
			clearData();
			$scope.menuItems = data;
		});
		
	}
	
	function clearData() {
		$scope.menu.name = "";
		$scope.menu.price = "";
	}
	var menuNo = 0;
	$scope.setSelected = function (no) {
		menuNo = no;
		$("#editModal").modal();
		$http({
			url : "/angular/chicken/detailMenu.do?no=" + no
		})
		.success (function (data) {
			$scope.selected = data;
		});
	}
	
	$scope.update = function () {
		$http({
			url : "/angular/chicken/updateMenu.do",
		 method : "POST",
		   data : $.param({no:menuNo,name:$scope.selected.name,price:$scope.selected.price}), 
	    headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
		})
		.success(function (data) {
			$("#editModal").modal('hide');
			$scope.selected.name = "";
			$scope.selected.price = "";
			$scope.menuItems = data;
		});
	};
	
	$scope.del = function () {
		$http({
			url : "/angular/chicken/deleteMenu.do",
		 method : "POST",
		   data : $.param({no:menuNo}),
		headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
		})
		.success(function (data) {
			$scope.menuItems = data;
			$("#editModal").modal('hide');
		});
	}
});