const express=require("express");
// requiring express router as middle ware 
const router=express.Router();
// requiring home controllers
const createCustomer=require("../controllers/api/createCustomer")
const getCustomer=require("../controllers/api/getCustomer")


router.post("/create_customer",createCustomer);
router.get("/get_customer",getCustomer);


module.exports=router;

