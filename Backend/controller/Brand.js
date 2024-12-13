const {Brand} = require('../model/Brand');

exports.fetchAllBrands=async (req,res)=>{
  try{
    const allbrands=await Brand.find({});
    res.status(200).json(allbrands);
  }
  catch(err){
    res.status(400).json(err);
  }
}

exports.createBrands=async (req,res)=>{
  try{
    const brand = new Brand(req.body);
    const newBrand=await brand.save();
    res.status(200).json(brand);
  }
  catch(err){
    res.status(400).json(err);
  }
}