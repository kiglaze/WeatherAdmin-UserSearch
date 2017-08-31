const ADMIN = "admin";
const USER = "user";
var args = process.argv;
var isAdmin = (args[2] === ADMIN);
var name = args[3];
var location = args[4];
var WeatherAdmin = require("./WeatherAdmin.js");
var Logger = require("./Logger.js");

var weatherAdmin = new WeatherAdmin();
var logger = new Logger();

if(isAdmin) {
	logger.readLog();
} else {
	weatherAdmin.addUserSearch(name, location);
}
