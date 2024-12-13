const {fetchAllBrands,createBrands}=require('../controller/Brand');
const express=require('express');

const router=express.Router();

router.get('/',fetchAllBrands)
      .post('/',createBrands);

exports.router=router;