app.factory('nametrickFactory', function() {
	return {
		reverse : function(name) {
			return name.split("").reverse().join("");
		}
	}
});