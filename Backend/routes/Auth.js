const { createUser ,loginUser }=require('../controller/Auth');
const express=require('express');
const router=express.Router();

// auth is already added in base path
// login user me hum , check krenege ki kisi particular user logged hai ya nahi
router.post('/signup',createUser).post('/login',loginUser);


exports.router=router;