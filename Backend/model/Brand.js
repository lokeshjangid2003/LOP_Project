const mongoose=require('mongoose');
const {Schema}=mongoose;


const brandSchema=Schema({
  value:{type:String},
  label:{type:String},
  checked:{type:Boolean,default:false}
})


const virtual=brandSchema.virtual('id');
virtual.get(function(){
  return this._id;
})

brandSchema.set('toJSON',{
  virtuals:true,
  versionKey:false,
  transform:function(doc,ret){
    delete ret._id
  }
})

exports.Brand=mongoose.model('Brand',brandSchema);