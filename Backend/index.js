const express=require('express');
const mongoose=require('mongoose');
const { createProduct, getAllproducts } = require('./controller/product');
const productRouters=require('./routes/Product');
const categoryRouter=require('./routes/Category');
const brandRouter=require('./routes/Brand');
const userRouter=require('./routes/User');
const authRouter=require('./routes/Auth');
const cartRouter=require('./routes/Cart');
const orderRouter=require('./routes/Order');

const cors=require('cors');
const server=express();

main().catch((err)=>console.log('error while connecting mongoose'));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
}

server.use(cors()) // ek port se dusre port ko connect krne k liye

server.use(express.json()); //to parse req.body
server.use('/products',productRouters.router);
server.use('/category',categoryRouter.router);
server.use('/brands',brandRouter.router);
server.use('/users',userRouter.router);
server.use('/auth',authRouter.router);
server.use('/cart',cartRouter.router);  
server.use('/orders',orderRouter.router);





server.listen(8080,()=>{
  console.log('Server Started');
});