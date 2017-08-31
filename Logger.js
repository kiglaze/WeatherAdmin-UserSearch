var fs = require("fs");
const LOG_FILE = "log.txt";
function Logger() {
	this.add = function(name, location, date) {
		fs.appendFileSync(LOG_FILE, name + "," + location + "," + date + "\n");
	};
	this.readLog = function() {
		// TODO
	};
}

var logFileContent = fs.readFileSync(LOG_FILE, "utf8");
console.log(logFileContent);

var logger = new Logger();


