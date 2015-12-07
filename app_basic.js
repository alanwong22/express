// at promt: npm install express

// in app_basic.js
var app= require('express')();
app.get('/', function(req, res){
  res.end('Hello World');
});
app.listen(3000);
console.log('running...');

// at prompt: node app_basic.js