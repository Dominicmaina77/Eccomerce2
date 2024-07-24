const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const productRoutes = require ('./route/ProductRoute');

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config({
        path: './.env'
    });
}

const port = process.env.PORT;
const dbconnect = "mongodb+srv://Dominic:Dominic77.@cluster0.jvxtzpo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.listen(port,(req,res) => {
    console.log(`Server is running on ${port}`);
    console.log(`database url is ${dbconnect}`);
})

app.get('/',(req,res)=>{
    res.send("Server is running");
})


mongoose.connect(dbconnect,{useNewUrlParser:true,useUnifiedTopology:true})
   .then(() => console.log("Connected to MongoDB"))
   .catch(err => console.error('Error connecting to MongoDB',err));

   app.use('/api/products',productRoutes);