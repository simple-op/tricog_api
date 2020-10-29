// requiring Mysql 
const connection=require("./config/mysql");
// requiring Express for server creation
const express=require("express");
// express Router
const router =require("./routes/index")
const app=express();
// middleware for json req.body
app.use(express.json());
// port for server
const port=process.env.PORT||8080;



app.use("/",router)







app.listen(port,function(err){

    if(err){
        console.log(err);

    }
    else{
        console.log(`server running on ${port}`)
    }
});


