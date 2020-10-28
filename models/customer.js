

const query=`create table if not exists customer(
    id int primary key auto_increment,
    first_name varchar(50) not null,
    pan_number varchar(10)  not null unique ,
    dob  datetime  not null,
    gender varchar(15) not null,
    email varchar(50) not null unique,
    profile_image varchar(200) not null unique
)`;  
connection.query(
    query,function(err,result){
        console.log(result)

})