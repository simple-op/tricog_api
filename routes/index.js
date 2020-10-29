const express=require("express");
// requiring express router as middle ware 
const router=express.Router();
// requiring home controllers
const createCustomer=require("../controllers/api/createCustomer")
const getCustomer=require("../controllers/api/getCustomer")
const verifyToken=require("../middleware/verifyToken")


router.post("/create_customer",createCustomer);
router.get("/get_customer",verifyToken,getCustomer);


module.exports=router;

