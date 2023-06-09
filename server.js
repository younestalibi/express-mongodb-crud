const express=require('express')
const app=express()
const mongoose = require('mongoose');

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

app.get('/',(req,res)=>{
    res.send('hello world')
})



