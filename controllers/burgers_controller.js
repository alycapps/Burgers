var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
        var BurgersObj = {
            burgers: data
        };
        console.log(BurgersObj);
        res.render("index", BurgersObj);
    })
});


module.exports = router;