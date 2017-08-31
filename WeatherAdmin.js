var UserSearch = require("./UserSearch.js");

var WeatherAdmin = function() {
};

WeatherAdmin.prototype.addUserSearch = function(name, location) {
	var userSearch = new UserSearch(name, location);
	userSearch.getWeather();
};

module.exports = WeatherAdmin;
