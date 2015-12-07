// at promt: npm install express

// in app_basic2.js
var app = require("express")();

app.get("/users", function (req, res) {
	console.log("The req parameter contains request info");
	console.log(req);
	console.log("And the res the response information");
	console.log(res);
	res.send("Logged the request and response");
});

app.post("/users", function (req, res) { res.send("all the HTTP verb looks the same");});
app.patch("/users", function (req, res) { res.send("all the HTTP verb looks the same");});
app.delete("/users", function (req, res) { res.send("all the HTTP verb looks the same");});
// and HEAD and OPTIONS and what have you... 

app.listen(3000);
console.log("you can now post, delete, get, and patch to http://localhost:3000/users");
// at prompt: node app_basic2.js