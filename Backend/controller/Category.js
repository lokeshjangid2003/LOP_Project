const {Category}=require('../model/Category');

exports.fecthAllCategories=async(req,res)=>{
  try{
    const allcategories=await Category.find({});
    res.status(200).json(allcategories);
  }
  catch(err){
    res.status(400).json(err);
  }
}

exports.createCategory=async (req,res)=>{
  try{
    const category=new Category(req.body);
    const newcategory=await category.save();
    res.status(200).json(newcategory);
  }
  catch(err){
    res.status(400).json(err);
  }
}