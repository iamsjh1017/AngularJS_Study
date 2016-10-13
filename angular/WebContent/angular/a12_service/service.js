app.service('nametrickService', function() {
	this.reverse = function(name) {
		return name.split("").reverse().join("");
	};
});
app.factory('nametrickFactory', function() {
	return { reverse : function(name) {
		return name.split("").reverse().join("");
		}
	}
});