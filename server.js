const express = require('express');
const bodyParser= require('body-parser');
// const dbConfig = require('./config/database.js');
const mongoose=require('mongoose');
const apiRoutes=require('./controllers/employee.controller')
const userRoutes=require('./controllers/user')


// const client=new MongoClient("mongodb+srv://newdashboard:YYQWcdXWrcpqwIX4@cluster0.ttk0alm.mongodb.net/?retryWrites=true&w=majority")

mongoose.connect("mongodb://127.0.0.1:27017/apilearning").
then(()=>console.log("Mongoose Connected")).
catch(err=>console.log("Something went wrong: " + err))

const app = express();


app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

//define a simple route

app.use('/api/employees',apiRoutes)
app.use('/user',userRoutes)

app.get('/',(req,res)=>{
    res.json({
        "message":"Welcome to the learning of api in Nodejs"
    })
})

//listen for requests
app.listen(4000,()=>{
    console.log("server is listening on port 4000")
})