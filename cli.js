const ADMIN = "admin";
const USER = "user";
var args = process.argv;
var isAdmin = (args[2] === ADMIN);
var name = args[3];
var location = args[4];
var WeatherAdmin = require("./WeatherAdmin.js");
var fs = require("fs");

