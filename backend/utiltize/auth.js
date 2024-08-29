const jwt =require('jsonwebtoken');
require('dotenv').config();
const authMiddleware=(req,res,next)=>{
    //const authHeader=req.header['authorization'];
    const token =req.header('authorization').replace('Bearer ','');
    if(!token){
        return res.status(401).json({error:'Access Denied'});
    }
    try{
        const verified=jwt.verify(token,process.env.secret_key);//process instead of document
        req.user=verified;
        next();
    }catch(err){
      res.status(400).send(err.message)
    }
}
module.exports=authMiddleware;