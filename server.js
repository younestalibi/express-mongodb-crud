const express=require('express')
const app=express()
const mongoose = require('mongoose');
const Product=require('./models/productModel')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// mongoose.set("strictquery",false) 
mongoose.connect('mongodb+srv://root:0632500408@node-api.yzphjjo.mongodb.net/Node-API')
    .then(() => {
        app.listen(3000,()=>{
            console.log('Node api is running on port 3000')
        })
        console.log('Connected to mongodb!')
    })
    .catch((err)=>{
        console.log(err)
    });


app.get('/products',async(req,res)=>{
    try{
        const products=await Product.find({});
        res.status(200).json(products)
    }catch(err){
        console.log(err.message);
        res.status(500).json({messsage:err.message})
    }
})
app.post('/products',async(req,res)=>{
    try{
        const product=await Product.create(req.body)
        res.status(200).json(product)
    }catch(err){
        console.log(err.message);
        res.status(500).json({messsage:err.message})
    }
})
app.get('/products/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const product=await Product.findById(id);
        res.status(200).json(product)
    }catch(err){
        console.log(err.message);
        res.status(500).json({messsage:err.message})
    }
})
app.put('/products/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const product=await Product.findByIdAndUpdate(id,req.body,{ new: true })
        if(!product){
            return res.status(404).json({message:`cannot find any product with ID ${id}`})
        }
        res.status(200).json(product)
    }catch(err){
        console.log(err.message);
        res.status(500).json({messsage:err.message})
    }
})
app.delete('/products/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const product=await Product.findByIdAndDelete(id);
        
        if(!product){
            return res.status(404).json({message:`cannot find any product with ID ${id}`})
        }
        res.status(200).json(product)
    }catch(err){
        console.log(err.message);
        res.status(500).json({messsage:err.message})
    }
})

