var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

//shows all burgers
router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
        var BurgersObj = {
            burgers: data
        };
        // console.log(BurgersObj);
        res.render("index", BurgersObj);
    });
});

//allows user to add a new burger
router.post("/api/burgers", function(req,res) {
    burgers.insertOne(req.body.burger_name, function(result) {
        res.json({id: result.insertId});
    });
});
    
//allows user to "devour" a burger aka update boolean string for devour
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burgers.updateOne( {devoured: req.body.devoured}, condition, function(result) {
        //return error if no rows changed
        if (result.changedRows === 0) {
            return res.status(404).end();
          }
          res.status(200).end();
    });
});

module.exports = router;