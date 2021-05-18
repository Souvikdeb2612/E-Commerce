const express=require('express');
const router=express.Router();
const Product = require('../models/product');


// Get the form for adding new product
router.get('/products/new', (req, res) => {

    res.render('products/new');
})


// Show particular product
router.get('/products/:id', async(req, res) => {
    try {
        const product=await Product.findById(req.params.id)
        res.render('products/show', { product});
    }
    catch (e) {
        console.log(e.message);
    }
})


// Show products based on categories
router.get('/products/:category/category', async(req,res)=>{
    const products = await Product.find({category : req.params.category}); 
    res.render('products/index', {products});
    
})




// Create New Product
router.post('/products',async(req, res) => {

    try {
        await Product.create(req.body.product);
        res.redirect('/products');
    }
    catch (e) {
        console.log(e.message);

    } 
});

// Get Product Edit form
router.post('/products/:id/edit',async(req, res) => {

    try {
        const product=await Product.findById(req.params.id);
        res.render('products/edit', {product});
    }
    catch (e) {
        console.log(e.message);

    } 
});



module.exports = router;