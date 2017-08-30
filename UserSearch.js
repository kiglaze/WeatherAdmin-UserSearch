// Here we include the weather-js so we can use it in our Node application.
var weather = require("weather-js");
var fs = require("fs");

// Constructor function for creating UserSearch objects
var UserSearch = function(name, location) {
    this.name = name;
    this.location = location;
    this.date = Date.now();
};

UserSearch.prototype.getWeather = function(name, location) {

    var search = new UserSearch(name, location);

    weather.find({search: location, degreeType: "F"}, function (err, result) {

        // If there is an error log it.
        if (err) {
            console.log(err);
        }

        // If there is no error... then print out the weather data.
        // We use JSON.stringify to print the data in string format.
        // We use the JSON.stringify argument of "2" to make the format pretty.
        // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
        console.log(JSON.stringify(result, null, 2));

        fs.appendFile("log.txt", this.name + "," + this.location + "," + this.date + "\n", function (err) {

            // If an error was experienced we say it.
            if (err) {
                console.log(err);
            }

            // If no error is experienced, we'll log the phrase "Content Added" to our node console.
            else {
                console.log("User search added to file!");
            }

        });
    });
};

module.exports = UserSearch;

