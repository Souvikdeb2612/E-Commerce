const express=require('express');
const router=express.Router();
const Product = require('../models/product');
const Review = require('../models/review');

// Show products based on categories
router.get('/products/:id/show', async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id).populate('reviews'); 
        res.render('products/show', {product});
    }
    catch(e){
        console.log("Something Went Wrong");
        req.flash('error', 'Cannot Find Products');
        res.redirect('/error');
    }
    
})

// Get the form for adding new product
router.get('/products/new', (req, res) => {

    res.render('products/new');
})


// Show products based on categories
router.get('/products/:category', async(req,res)=>{
    try{
        const products = await Product.find({category : req.params.category}); 
        res.render('products/index', {products});
    }
    catch(e){
        console.log(e.message);
        req.flash('error', 'Something went wrong');
        res.redirect('/error');
    }
 
    
})



// Create New Product
router.post('/products',async(req, res) => {

    try {
        await Product.create(req.body.product);
        req.flash('success', 'Product created succesfully');
        res.redirect('/');
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Product Creating Failed');
        res.redirect('/error');

    } 
});

// Get Product Edit form
router.get('/products/:id/edit',async(req, res) => {

    try {
        const product=await Product.findById(req.params.id);
        res.render('products/edit', {product});
    }
    catch (e) {
        console.log(e.message);

    } 
});

// Upadate the particular product
router.patch('/products/:id',async(req, res) => {
    
    try {
        await Product.findByIdAndUpdate(req.params.id, req.body.product);
        req.flash('success', 'Updated Succesfully');
        res.redirect(`/products/${req.params.id}/show`) 
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Updating Failed');
        res.redirect('/error');
    }
})


// Delete a particular product
router.delete('/products/:id',async (req, res) => {

    try {
        await Product.findByIdAndDelete(req.params.id);
        req.flash('success', 'Deleted Product Succesfully');
        res.redirect('/');
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Something Went Wrong');
        res.redirect('/error');

    }
})


// Creating a New Review on a Product

router.post('/products/:id/review', async (req, res) => {
    try{

        const product = await Product.findById(req.params.id);
        const review = new Review(req.body);
        console.log(review);
    
        product.reviews.push(review);
    
        await review.save();
        await product.save();
    
        res.redirect(`/products/${req.params.id}/show`);
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot add review to this Product');
        res.redirect('/error');
    }
})

router.get('/error', (req,res)=>{
    res.status(404).render('error');
})

module.exports = router;