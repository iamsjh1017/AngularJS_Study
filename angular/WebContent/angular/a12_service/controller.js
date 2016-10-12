//myApp 모듈에 컨트롤러를 추가한다.
app.controller( 'AppCtrl', function AppCtrl($scope, nametrickService, nametrickFactory) {
	$scope.name = 'Guest';
	//nametrickService를 사용하는 스코프레벨 함수 선언
	$scope.reverseNameService = function() {
		$scope.name = nametrickService.reverse($scope.name);  
	};
	//같은 기능을 하는 nametrickFactory를 사용하는 스코프레벨 함수 선언
	$scope.reverseNameFactory = function() {
		$scope.name = nametrickFactory.reverse($scope.name);  
	};
});