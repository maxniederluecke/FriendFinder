var path = require("path");
var data = require("../data/friends")

app.get("/api/data", function(req, res) {
	res.json(data);
});