var mysql = require("mysql");

var connection 


if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "bmsyhziszmhf61g1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: "3306",
    user: "v4guvn7pty1ux8kt",
    password: "wpf5ejdpjf7jd7vc",
    database: "burgers_db" 
  });
};


connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;