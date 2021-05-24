const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB= require('./seed');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');


// Routes
const productRoutes=require('./routes/product'); 
const authRoutes = require('./routes/auth');

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


// Initilising the passport and sessions for storing the users info
app.use(passport.initialize());
app.use(passport.session());

// configuring the passport to use local strategy
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.success=req.flash('success');
    res.locals.error=req.flash('error');
    res.locals.currentUser = req.user;
    next();
})
app.get('/', (req,res)=>{
    res.render("home");
})


app.use(productRoutes);
app.use(authRoutes);


app.listen(8080, ()=>{
    console.log("Listening on port 8080");
})