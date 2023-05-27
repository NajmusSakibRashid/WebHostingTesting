const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Sample message. Hello World');
})

app.listen(3000,()=>{
    console.log('server is listening at port:3000');
})