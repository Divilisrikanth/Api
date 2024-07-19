const express = require('express');
const app = express();
const port = process.env.port || 5000;
const { products } = require('./data');


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