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
WeatherAdmin.prototype.printUserSearchesArray = function() {
	var userSearches = this.getuserSearchesArray();
	if(userSearches) {
		userSearches.forEach(userSearch) {
			// TODO
		}
	}
};

module.exports = WeatherAdmin;