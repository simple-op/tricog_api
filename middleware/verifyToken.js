const CryptoJS = require("crypto-js");
const { MD5 } = require("crypto-js");

const secretKey= "ptwmjg.ad";

function verifyToken(req,res,next){

const token=req.headers["authorization"];
 

const bytes  = CryptoJS.AES.decrypt(token, secretKey);

try{
const originalText = bytes.toString(CryptoJS.enc.Utf8);



req.email=originalText;



next();

}
catch{
    res.json(404,{
       error:"Not a valid Token,put a valid token in Authorization header" 

    })
}
    


}

module.exports=verifyToken;