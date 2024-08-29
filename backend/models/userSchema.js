const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{type:String,required:true,minLength:3,maxLength:10,lowercase:true,trim:true},
    password:{type:String,required:true},
},
    {timestamps:true}
)
const User=mongoose.model('user',userSchema);
User.syncIndexes();
module.exports=User;