const {User} = require('../model/User.js');

exports.fetchUserById=async (req,res)=>{
  try{
    const id=req.params.id;
    // aap user ko saari information nahi deni chahiye to jo informations aapko dena ho vo aap as second aragument you can put in findById
    const user=await User.findById(id).exec();
    res.status(200).json(user);
  }
  catch(err){
    res.status(400).json(err);
  }
}

exports.fetchAllUsers=async (req,res)=>{
  try{
    const users=await User.find({}).exec();
    res.status(200).json(users);
  }
  catch(err){
    res.status(400).json(err);
  }
}

exports.createUser=async (req,res)=>{
  try{
    const user=new User(req.body);
    const newUser=await user.save();
    console.log('newUser is : ',newUser);
    res.status(200).json(newUser);
  }
  catch(err){
    console.log('error while saving data');
    res.status(400).json(err);
  }
}


exports.updateUser=async (req,res)=>{
  try{
    const id=req.params.id;
    const user=await User.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json(user);
  } 
  catch(err){
    res.status(400).json(err);
  }
}