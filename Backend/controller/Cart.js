const {Cart}=require('../model/Cart');


exports.addToCarts=async (req,res)=>{
  try{
    const cart=new Cart(req.body);
    const newCart= await cart.save();
    const result=await newCart.populate('product');
    res.status(200).json(result);
  } 
  catch(error){
    res.status(400).json(error);
  }
};


exports.updateCart=async (req,res)=>{
  try{
    const id=req.params.id;
    const cart=await Cart.findByIdAndUpdate(id,req.body,{new:true});
    const result=await cart.populate('product');
    res.status(200).json(result);
  }
  catch(error){
    res.status(400).json(error);
  }
};







exports.fetchItemsByUserID = async (req,res)=>{
  const { user } = req.query;
  console.log(user);
  try{
    const cartItems=await Cart.find({user:user}).populate('user').populate('product');
    // we used populate so that we can get all the properties of user and product
    console.log(cartItems);
    res.status(200).json(cartItems);
  }
  catch(error){
    res.status(400).json(err);
  }
}


exports.deleteFromCart=async (req,res)=>{
 try{
  const id=req.params.id;
  const doc=await Cart.findByIdAndDelete(id);
  res.status(200).json(doc);
 }
 catch(error){
  res.status(400).json(error);
 } 
}


exports.resetCart=(req,res)=>{
  try{

  }
  catch(error){
    res.status(400).json(error);
  }
}






