
const connection=require("./config/mysql");

const express=require("express");
const { query } = require("./config/mysql");


const app=express();
// app.use(express.urlencoded({extended: true}));
app.use(express.json());
const port=8080;

app.get("/",function(req,res){

  res.json({
      "hello"
:true  })
})






app.listen(port,function(err){

    if(err){
        console.log(err);

    }
    else{
        console.log(`server running on ${port}`)
    }
});


