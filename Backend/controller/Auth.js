const {User} = require('../model/User');

exports.createUser=async (req,res)=>{
  try{
    const user=new User(req.body);
    const newUser=await user.save();
    res.status(201).json(newUser);
  }
  catch(err){
    res.status(400).json(err);
  }
}

exports.loginUser= async (req,res)=>{
  try{
    const user= await User.findOne({email:req.body.email});
    console.log('user is :' ,user);
    console.log('user email is : ',req.body.email);
    console.log('req.body.password is :',req.body.password);
    // this is just temporary , we will use strong password
    if(user.password === req.body.password){
      // we will make addressess independent of login
      console.log('Enter');
      res.status(200).json({id:user.id,email:user.email,addresses:user.addresses});
    }else{
      // 401 is used for unauthorized user
      res.status(401).json({message:'invalid credentials'});
    }
  }
  catch(err){
    res.status(400).json(err);
  }
}

