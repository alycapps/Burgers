var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var exphbs = require("express-handlebars");

//set up express and heroku port option
var app = express();
var PORT = process.env.PORT || 3001;

// serve static assets
app.use(express.static(__dirname + './public'));

//allow express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//connect to path files
var routes = require('./controllers/burgers_controller.js');
app.use(routes);

//start server listening
app.listen(PORT, function() {
    console.log("listening on PORT: " + PORT);
});