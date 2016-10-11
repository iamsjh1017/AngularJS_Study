/*
 * BODY 태그 안에 ng-controller 에서 할당해준 컨트롤러의 이름과 동일한
 * 자바스크립트 함수가 자동으로 매칭된다.
 * ng-controller에서 호출할 때는 scope 파라메터를 따로 넣지 않았지만,
 * 실제 컨트롤러 함수에서는 아래와 같이 $scope 를 파라메터로 받는다.
 */
function PhoneListController($scope)
{
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

	//이렇게 선언된 배열 형태의 데이터 모델은 후에 NG-REPEAT에 의해 사용된다.
}
 