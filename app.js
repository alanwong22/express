// at promt: npm install express

// in app.js
var express = require("express");
var app = express();
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())



app.get('/', function(req, res){
  res.end('Hello World');
});



app.get("/users", function (req, res) {
	console.log("### The req parameter contains request info");
	console.log(req);
	console.log("### And the res the response information");
	console.log(res);
	res.send("Logged the request and response");
});

app.patch("/users", function (req, res) { res.send("all the HTTP verb looks the same");});
app.delete("/users", function (req, res) { res.send("all the HTTP verb looks the same");});
// and HEAD and OPTIONS and what have you... 

// Access this with http://localhost:3000/users/12345?color=red
// for example

app.get("/users/:id", function (req, res) {
	var id = req.params.id;
	var color = req.query.color;

	res.send("Yes? You asked for customer '" + id +
		"' and passed the color = '" + color + "'");
});

// Use POSTMAN to test: x-www-form-urlencoded
app.post("/api/users", function (req, res) {

	var name = req.body.name;
	var email = req.body.email;

	res.send("You sent name = '" + name + "' and email='" + email + "'");

});

app.listen(3000);
console.log("you can now post, delete, get, and patch to http://localhost:3000/users");
// at prompt: node app.js