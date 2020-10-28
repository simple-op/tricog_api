
const connection=require("./config/mysql");
const express=require("express");
const router =require("./routes/index")
const app=express();
// app.use(express.urlencoded({extended: true}));
app.use(express.json());
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


