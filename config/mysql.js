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

  const query=`create table if not exists customer(
    id int primary key ,
    first_name varchar(50) not null,
    pan_number varchar(10)  not null unique ,
    dob  date not null,
    gender varchar(15) not null,
    email varchar(50) not null unique,
    profile_image varchar(200) not null unique
)`;  
connection.query(
    query,function(err,result){
        console.log(result)

})

module.exports=connection;