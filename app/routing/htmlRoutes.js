var path = require("path")

app.get("/", function(req, res) {
	res.sendFile("../public/home.html");
});

app.get("/survey", function(req, res) {
	res.sendFile("../public/survey.html");
});