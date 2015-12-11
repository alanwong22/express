var express = require('express');
var router = express.Router();

// // middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get("/", function (req, res) {
	res.send("Router - Users");
});

// Access this with http://localhost:3000/users/12345?color=red
// for example

router.get("/:id", function (req, res) {
	var id = req.params.id;
	var color = req.query.color;

	res.send("Yes? You asked for customer '" + id +
		"' and passed the color = '" + color + "'");
});

// Use POSTMAN to test: x-www-form-urlencoded
router.post("/", function (req, res) {

	var name = req.body.name;
	var email = req.body.email;

	res.send("You sent name = '" + name + "' and email='" + email + "'");
});

module.exports = router;