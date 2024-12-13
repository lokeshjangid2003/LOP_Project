const mongoose=require('mongoose');
const {Schema} = mongoose;

const productSchema=new Schema({
    title: {type:String,required:true},
    description:{type:String,required:true},
    category: {type:String},
    price:{type:Number,min:[0,'wrong price'],required:true},
    discountPercentage: {type:Number,min:[0,'wrong discount'],default:0},
    rating:{type:Number,max:[5,'wrong rating'],default:0},
    stock:{type:Number,required:true},
    tags: [
     {type:String}
    ],
    brand:{type:String},
    sku: {type:String},
    weight: {type:Number},
    dimensions: {
      width: {type:Number},
      height: {type:Number},
      depth: {type:Number}
    },
    warrantyInformation: {type:String,required:true},
    shippingInformation: {type:String,required:true},
    availabilityStatus:{type:String,required:true},
    reviews: [
      {
        rating: {type:Number},
        comment: {type:String},
        date:{type:String},
        reviewerName: {type:String},
        reviewerEmail: {type:String}
      }
    ],
    returnPolicy: {type:String,required:true},
    minimumOrderQuantity:{type:Number},
    meta: {
      createdAt: {type:String,required:true},
      updatedAt: {type:String,required:true},
      barcode: {type:String,required:true},
      qrCode: {type:String,required:true}
    },
    images: [
      {type:String,required:true}
    ],
    thumbnail: {type:String,required:true},
    deleted:{type:Boolean,default:false}
})

const virtual=productSchema.virtual('id');
virtual.get(function(){
  return this._id;
})

productSchema.set('toJSON',{
  virtuals:true,
  versionKey:false,
  transform:function(doc,ret){
    delete ret._id
  }
})

exports.Product=mongoose.model('Product',productSchema);