//Connecting node to mySQL
//dependencies
var mysql = require("mysql");

//unique info needed for setting up connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",  
    password: "root",
    database: "burgers_db"
});

//actually connecting
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

//exported for ORM
module.exports = connections;