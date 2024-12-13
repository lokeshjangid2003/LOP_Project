const {Order}=require('../model/Order');


exports.createOrder=async (req,res) =>{
  try{
    const order= new Order(req.body);
    const newOrder=await order.save();
    res.status(200).json(newOrder);
  }
  catch(err){
    res.status(400).json(err);
  }
}



exports.updateOrder=async (req,res)=>{
  try{
    const id=req.params.id;
    const newOrder=await Order.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json(newOrder);
  }
  catch(error){
    res.status(400).json(error);
  }
}



exports.fetchOrdersByUser= async (req,res)=>{
  const {user}=req.query;
  try{
    const cartItems=await Order.find({user:user});
    res.status(200).json(cartItems);
  }
  catch(error){
    res.status(400).json(error);
  }
}



exports.deleteOrder=async (req,res)=>{
  try{
    const id=req.params.id;
    const deletedItem=await Order.findByIdAndDelete(id);
    res.status(200).json(deletedItem);
  } 
  catch(error){
    res.status(400).json(error);
  }
}



