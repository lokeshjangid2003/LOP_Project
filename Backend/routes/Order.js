const express=require('express');
const router=express.Router();
const {deleteOrder,updateOrder,fetchOrdersByUser,createOrder} = require('../controller/Order');



router.get('/',fetchOrdersByUser)
      .post('/',createOrder)
      .patch('/:id',updateOrder)
      .delete('/:id',deleteOrder);


exports.router=router;
