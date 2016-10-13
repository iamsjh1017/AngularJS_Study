angular
	.module('myModule', [])
	.config(function(injectables) {
		// 설정 블럭
		// 오직 프로바이더들만 인젝트 할 수 있다.
	})
	.run(function(injectables) {
		// 실행 블럭
		// 오직 인스턴스들만 인젝트 할 수 있다.
	});

/************************************************/

angular
	.module('myModule', [])
	.config(function($provide, $compileProvider, $filterProvider) {
		$provide.value('a', 123)
		$provide.factory('a', function() { return 123; })
		$compileProvider.directive('directiveName', []).
		$filterProvider.register('Name', []);
	});

//위의 설정 블럭을 각각의 대체 가능한 메서드로 표현하면,

angular
	.module('myModule', [])
	.value('a', 123)
	.factory('a', function () {
					return 123; 
			})
	.directive('directiveName', [])
	.filter('filterName', []);