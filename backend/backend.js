const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "username",
  psw: "password",
  database: "dbname"
});

app.post("/login", function(req, res) {
  const user = req.body.user;
  const psw = req.body.psw;

  connection.query("SELECT * FROM DB WHERE username = ? AND password = ?", [user, psw], function(error, results, fields) {
    if (error) {
      res.status(500).send("error");
    } else if (results.length === 0) {
      res.status(401).send("error check password or username");
    } else {
      res.status(200).send("logged in");
    }
  });
});

app.listen(3000);