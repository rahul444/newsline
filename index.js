var express = require('express');
var app = express();
var request = require('request');
// app.set('views', __dirname + '/views');
// app.set('view engine', 'jade');
var port = process.env.PORT || 3000;

app.get("/", function(req, res) {
	res.send("Hello");
});

app.listen(port, function() {
  console.log('listening on: ' + port);
});
