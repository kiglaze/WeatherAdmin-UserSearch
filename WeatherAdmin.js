var UserSearch = require("./UserSearch.js");
var WeatherAdmin = function() {
	this.userSearches = [];
}
WeatherAdmin.prototype.addUserSearch = function(name, location) {
	var userSearch = new UserSearch(name, location);
	this.userSearches.push(userSearch);
	userSearch.getWeather();
};
WeatherAdmin.prototype.getuserSearchesArray = function() {
	return this.userSearches;
};
WeatherAdmin.prototype.printUserSearchesArray = function() {
	var userSearches = this.getuserSearchesArray();
	if(userSearches) {
		userSearches.forEach(function(userSearch) {
			console.log(JSON.stringify(userSearch));
		});
	}
};

module.exports = WeatherAdmin;
