// at promt: npm install express

// in app.js
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var db = require("./model/db");
// var blob = require('./model/blobs');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())

app.get('/', function(req, res){
  res.end('Hello World');
});


var users = require('./routes/users');
var login = require('./routes/login');
app.use('/users', users);
app.use('/login', login);

app.listen(3000);