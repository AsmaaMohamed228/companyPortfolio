const express=require('express');
const router=express.Router();
const userContoller=require('../Controllers/userController');
const auth=require('../utiltize/auth');



router.post('/',userContoller.createUser);
router.get('/',auth,userContoller.getUsers);
router.post('/login',userContoller.login);



module.exports=router;

