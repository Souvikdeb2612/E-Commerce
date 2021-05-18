const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB= require('./seed');
const methodOverride = require('method-override');

const productRoutes=require('./routes/product'); 


mongoose.connect('mongodb://localhost:27017/cakeDB', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>{
        console.log("DB connected");
    } )
    .catch((err) =>{
        console.log(err.message);
    });

// seedDB();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))


app.use(productRoutes);


app.get('/', (req,res)=>{
    res.render("home");
})


app.listen(8080, ()=>{
    console.log("Listening on port 8080");
})