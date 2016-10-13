app.service('nametrickService', function() {
	this.reverse = function(name) {
		return name.split("").reverse().join("");
	};
});