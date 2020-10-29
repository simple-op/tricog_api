const express=require("express");
// requiring express router as middle ware 
const router=express.Router();
// requiring create customer controller
const createCustomer=require("../controllers/api/createCustomer")
// requiring get customer controller
const getCustomer=require("../controllers/api/getCustomer")
// token middleware
const verifyToken=require("../middleware/verifyToken")


router.post("/create_customer",createCustomer);
router.get("/get_customer",verifyToken,getCustomer);


module.exports=router;

