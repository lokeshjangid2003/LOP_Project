const express=require('express');
const {fecthAllCategories,createCategory}=require('../controller/Category');


const router=express.Router();
router.get('/',fecthAllCategories)
      .post('/',createCategory);


exports.router=router;
