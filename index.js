const express = require('express');
const app = express();
const port = process.env.port || 5000;
const { products } = require('./data');



app.get('/',(req,res)=>{
    res.send('<h2>For Products data click here</h2><a href="/items"</a>products').status(200)
})
app.get('/items',(req , res)=>{
    const getItems = products.map((data)=>{
        const{id,name,price,des,category}=data;
         return{id,name,price,des,category}
    })
    res.json(getItems)
})
app.listen(port,()=>{
    console.log(`server is listening at ${port}`)
})
