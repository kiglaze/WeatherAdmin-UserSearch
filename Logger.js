var fs = require("fs");
var moment = require('moment');
const LOG_FILE = "log.txt";
function Logger() {
	this.add = function(name, location, date) {
		fs.appendFileSync(LOG_FILE, name + "," + location + "," + date + "\n");
	};
	this.readLog = function() {
        var logFileContent = fs.readFileSync(LOG_FILE, "utf8");
		var lines = logFileContent.split(/\r?\n/);
		for (var i=0; i<lines.length - 1; i++) {
			items = lines[i].split(',');
			console.log(items[0],' ', items[1], ' ', moment(Number(items[2])).format("dddd, MMMM Do YYYY, h:mm:ss a"));
		}
    };
}

/*
var logger = new Logger();
logger.readLog();
*/

module.exports = Logger;




