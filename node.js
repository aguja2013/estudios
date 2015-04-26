var request = require("request"),
	cheerio = require("cheerio"),
	url = "http://www.wunderground.com/" + 02888;
	
request(url, function (error, response, body) {
	if (!error) {
		var $ = cheerio.load(body),
			temperature = $(".location has-city").html();
			
		console.log("It’s " + temperature + " degrees Fahrenheit.");
	} else {
		console.log("We’ve encountered an error: " + error);
	}
});