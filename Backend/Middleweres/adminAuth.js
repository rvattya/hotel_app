const jwt= require("jsonwebtoken");
const dotenv= require('dotenv');
dotenv.config();


const adminAuth= (req,res,next)=>{
    try {
        const authHeader= req.header('Authorization');
        console.log(authHeader,"authHeader");
        
        if(!authHeader){
            return res.status(401).json({message: "Authentication field, no token access"});
        }
        // const token= authHeader.replace('Bearer','');
        const token= authHeader.replace('Bearer ', '');

        console.log(token,"token");

        const decoded= jwt.verify(token,process.env.JWT_KEY);
        console.log(decoded, "decoded token");
        
        if(decoded.role !=='admin'){
            return res.status(403).json({message: "Access Denied, Admin only"})
        }
        req.admin= decoded;
        next();

        
    } catch (error) {
        console.error(error.message, "JWT Error");
        return res.status(401).json({message: "indelid token "})
        
    }
};
module.exports= {adminAuth};
