const mongoose=require('mongoose');
const {Schema}=mongoose;


const cartSchema=Schema({
    quantity: {type:Number,required:true},
    //hm yaha pe Product ka refrence de rahe hai So we don't to write all the properties of Product same is user
    product:{type:Schema.Types.ObjectId, ref:'Product',required:true},
    user:{type:Schema.Types.ObjectId, ref:'User',required:true}
});


const virtual=cartSchema.virtual('id');
virtual.get(function(){
  return this._id;
})

cartSchema.set('toJSON',{
  virtuals:true,
  versionKey:false,
  transform:function(doc,ret){
    delete ret._id
  }
})


exports.Cart=mongoose.model('Cart',cartSchema);