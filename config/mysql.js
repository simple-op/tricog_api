// const { query } = require("express");
const mysql=require("mysql");

let connection = mysql.createConnection({
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12373157',
    password: '6Yc3378TjX',
    database: 'sql12373157'
});


connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

export  default connection;