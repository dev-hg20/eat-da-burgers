var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burgers");

//GET routes
router.get("/", function (req, res) {
  burger.all(function (data) {
    console.log(data);
    const hbsObject = {
      burgers: data,
    };
    res.render("index", hbsObject);
  });
});

//POST route
router.post("/api/burgers", function (req, res) {
  burger.create(req.body.name, function (result) {
    res.json(result);
  });
});

//PUT route
router.put("/api/burgers/:id", function (req, res) {
  burger.update(req.params.id, function (result) {
    res.json(result);
  });
});

// Export routes for server.js to use.
module.exports = router;
