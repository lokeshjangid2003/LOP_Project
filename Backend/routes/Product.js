const express=require('express');
const { createProduct, getAllproducts, fetchAllProducts, fetchProductById, updateProduct } = require('../controller/product');

const router=express.Router();

router.post('/',createProduct)
      .get('/',fetchAllProducts)
      .get('/:id',fetchProductById)
      .patch('/:id',updateProduct);

exports.router=router;