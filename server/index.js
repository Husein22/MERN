const port=5000;
const express=require('express');
const app=express()


app.get("/hello",(req,res)=>{
    res.send("Hello wordl");
})



app.listen(port,()=>{
console.log(`Servers se pokrece na portu broj ${port} `)
})
