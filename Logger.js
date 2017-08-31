var fs = require("fs");
const LOG_FILE = "log.txt";
function Logger() {
	this.add = function(name, location, date) {
		fs.appendFileSync(LOG_FILE, name + "," + location + "," + date + "\n");
	};
	this.readLog = function() {
        var logFileContent = fs.readFileSync(LOG_FILE, "utf8");
		var lines = logFileContent.split(/\r?\n/);
		for (var i=0; i<lines.length; i++) {
			items = lines[i].split(',');
			console.log(items[0],' ', items[1], ' ', items[2].toString());
		}
    };
}

//var logger = new Logger();

module.exports = Logger;


