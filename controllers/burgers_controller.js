var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get("/", function(requestAnimationFrame,res) {
    burgers.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});

module.exports = router;