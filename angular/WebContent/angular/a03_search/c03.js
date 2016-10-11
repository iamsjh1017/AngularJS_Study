function PhoneListController($scope) {
	//$scope는 지금까지 느낄 때 jQuery에서 $에 해당하는 전역 객체로 느껴진다.
	//어느 곳에서도 접근할 수 있도록 설정해주는 역할을 한다고 보인다.
	$scope.phones = 
		[
			{
				"name": "Nexus S",
				"snippet": "Fast just got faster with Nexus S."
			},
			{
				"name": "Motorola XOOM™ with Wi-Fi",
				"snippet": "The Next, Next Generation tablet."
			},
			{
				"name": "MOTOROLA XOOM™",
				"snippet": "The Next, Next Generation tablet."
			}
		];
	$scope.hello = "Hello, World!";
};