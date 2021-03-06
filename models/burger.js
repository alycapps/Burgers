var orm = require("../config/orm.js");

var burgers = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },
    insertOne: function(vals, cb) {
        //UNDEFINED BURGERNAME HERE
        orm.insertOne("burgers", "burger_name", vals, function(res) {
            cb(res);
        })
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        })
    }
};

module.exports = burgers;