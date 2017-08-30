var fs = require("fs");
function Logger() {
	this.add = function() {
		// TODO
	};
	this.readLog = function() {
		// TODO
	};
}

var logFileContent = fs.readFileSync("log.txt", "utf8");
console.log(logFileContent);

var logger = new Logger();


