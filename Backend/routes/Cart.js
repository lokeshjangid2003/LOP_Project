const express=require('express');
const { fetchItemsByUserID, addToCarts, updateCart, deleteFromCart} = require('../controller/Cart');
const router=express.Router();


router
      .get('/',fetchItemsByUserID)
      .post('/',addToCarts)
      .patch('/:id',updateCart)
      .delete('/:id',deleteFromCart);

exports.router=router;
