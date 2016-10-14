angular.module('todomvc')
    .factory('todomvcStorage', function ($http) {
      var storage = {

        todos: [],

        get: function (callback) {
          $http.get('/api/todos')                 // GET /api/todos 요청
              .then(function success(response) {  // 성공
                console.log(response);
                callback(null, angular.copy(response.data, storage.todos));
              }, function error(err) {            // 실패
                console.error(err);
                callback(err);
              });
        },
      };
    });