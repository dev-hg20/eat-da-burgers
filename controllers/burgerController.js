var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burgers");

//GET routes
router.get("/", function (req, res) {
  burger.all(function (data) {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//POST route
router.post("/api/burgers", function (req, res) {
  burger.insertOne(req.body.name, function (result) {
    res.json(result);
  });
});

//PUT route
router.put("/api/burgers/:id", function (req, res) {
  burger.updateOne(req.params.id, function (result) {
    res.json(result);
  });
});

// Export routes for server.js to use.
module.exports = router;
