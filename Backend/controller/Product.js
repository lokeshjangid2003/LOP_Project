const { Product } = require("../model/Product.js");




exports.createProduct = async (req,res)=>{
  try{
    const product=new Product(req.body);
    const newproduct=await product.save();
    res.status(201).json(newproduct);
  }
  catch(err){
    res.status(400).json(err);
  }
}


exports.fetchAllProducts=async (req,res)=>{

  // here we need all queries
  // filter ={"category":["smartphone","laptops"]}
  // sort = {_sort :"price",_order="desc"}
  // pagination ={_page:1,_limit=10}
  let query=Product.find({deleted:{$ne:true}});
  let totalProductQuery=Product.find({deleted:{$ne:true}});
  if(req.query.category){
    query = query.find({"category":req.query.category});
    totalProductQuery=totalProductQuery.find({"category":req.query.category});
  }
  if(req.query.brand){
    query = query.find({"brand":req.query.brand});
    totalProductQuery=totalProductQuery.find({"brand":req.query.brand});
  }

  // TODO : how to get sorted from discounted price
  if(req.query._sort && req.query._order){
    query = query.sort({[req.query._sort]:req.query._order});
    totalProductQuery = totalProductQuery.sort({[req.query._sort]:req.query._order});
    // we did query = query bcs we have to append it at previous query so that ye judta jaye
  }

  // hmne totalDocs count krne k liye alg query (totalPorductQuery) isliye bnai quki count krne k liye hme count().exec() likhna padega lekin exec krne pr yha yaha pr hi exec ho jati fir res me error jata that's why 
  const totalDocs=await totalProductQuery.countDocuments().exec();
  console.log({totalDocs});


  if(req.query._page && req.query._limit){
    const pageSize=req.query._limit;
    const page=req.query._page;
    query=query.skip(pageSize*(page-1)).limit(pageSize);
  }
  
  try{
    const docs=await query.exec();
    // set is used to build a header
    res.set('X-Total_Count',totalDocs);
    res.status(201).json(docs);
  }
  catch(err){
    res.status(400).json(err);
  }
}

exports.fetchProductById=async (req,res)=>{
  try{
    const id=req.params.id;
    const product=await Product.findById(id).exec();
    res.status(200).json(product);
  }
  catch(err){
    res.status(400).json(err);
  }
}

exports.updateProduct=async (req,res)=>{
  try{
    const id=req.params.id;
    const product=await Product.findOneAndUpdate({_id:id},req.body,{new:true});
    res.status(200).json(product);
  }
  catch(err){
    res.status(200).json(err);
  }
}


