var UserSearch = require("UserSearch.js");
var WeatherAdmin = function(userSearches) {
	this.userSearches = userSearches;
}
WeatherAdmin.prototype.addUser = function(userSearch) {
	this.userSearches.push(userSearch);
};
WeatherAdmin.prototype.getuserSearchesArray = function() {
	return this.userSearches;
};
