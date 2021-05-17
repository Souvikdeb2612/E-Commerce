const express=require('express');
const router=express.Router();
const Product = require('../models/product');


router.get('/products', async(req,res)=>{
    const products = await Product.find(req.params.category); 
    res.render('products/index', {products});
    console.log(req.params);
})




module.exports = router;