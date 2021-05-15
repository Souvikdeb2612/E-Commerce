const mongoose = require('mongoose');
const Product = require('./models/product');

const products= [
    {
        name:"ABC",
        img:"https://images.unsplash.com/photo-1619703865029-c0a3b7df9454?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
        price: 10000,
        desc: "lorem ipsum"

    },
    {
        name:"ABC",
        img:"https://images.unsplash.com/photo-1619703865029-c0a3b7df9454?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
        price: 10000,
        desc: "lorem ipsum"

    },
    {
        name:"ABC",
        img:"https://images.unsplash.com/photo-1619703865029-c0a3b7df9454?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
        price: 10000,
        desc: "lorem ipsum"

    },
    {
        name:"ABC",
        img:"https://images.unsplash.com/photo-1619703865029-c0a3b7df9454?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
        price: 10000,
        desc: "lorem ipsum"

    },
    {
        name:"ABC",
        img:"https://images.unsplash.com/photo-1619703865029-c0a3b7df9454?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
        price: 10000,
        desc: "lorem ipsum"

    }
]


const seedDB = async ()=>{
    await Product.insertMany(products);
    console.log("Database seeded");
}

module.exports = seedDB;