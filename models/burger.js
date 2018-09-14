var orm = require("orm");

var burgers = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res)) {
            cb(res);
        }
    },
    insertOne: function(value, cb) {
        orm.insertOne("burgers", burger_name, value, function(res)) {
            cb(res);
        }
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res)) {
            cb(res);
        }
    }
}


module.exports = burgers;