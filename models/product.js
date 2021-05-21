const mongoose = require('mongoose');
const Review = require('./review');

const productSchema= new mongoose.Schema({
    category:{
        type: String,
        required:true,
    },
    name: {
        type:String,
        required:true,
    },
    price: {
        type:Number,
        min: 0,
    },
    img:{
        type:String,
    },
    desc:{
        type:String,
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]

});


const Product = mongoose.model('Product', productSchema);
module.exports = Product;