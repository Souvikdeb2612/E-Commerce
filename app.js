const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB= require('./seed');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');

const productRoutes=require('./routes/product'); 


mongoose.connect('mongodb://localhost:27017/cakeDB', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false})
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

const sessionConfig = {
    secret: 'weneedsomebettersecret',
    resave: false,
    saveUninitialized: true
}

app.use(session(sessionConfig));
app.use(flash());

app.use((req,res,next)=>{
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    next();
})
app.get('/', (req,res)=>{
    res.render("home");
})


app.use(productRoutes);


app.listen(8080, ()=>{
    console.log("Listening on port 8080");
})