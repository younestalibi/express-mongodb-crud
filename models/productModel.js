const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please entre a product\'s name']
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:false
    }
})