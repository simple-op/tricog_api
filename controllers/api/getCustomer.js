const connection = require("../../config/mysql");

const getCustomer=(req,res)=>{
   
 const fecth='Select * from customer';
 connection.query(fecth,function(err,result){

      if(!err){
       res.json(200,{
           result
       })
    }
     
     else{
         res.json(500,{
             error:"Internal Server error"
         })
     }
     


 })



}

module.exports = getCustomer;