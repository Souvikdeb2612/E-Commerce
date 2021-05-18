const mongoose = require('mongoose');
const Product = require('./models/product');

const products= [
    {
        category:"chocolate",
        name:"ABC",
        img:"https://media.bakingo.com/sites/default/files/round-shaped-chocolate-cake-2-cake0654choc-A.jpg?tr=w-320,h-240,q-70",
        price: 10000,
        desc: "lorem ipsum"

    },
    {
        category:"chocolate",
        name:"ABC",
        img:"https://media.bakingo.com/sites/default/files/round-shaped-chocolate-cake-1-cake0653choc-A.jpg?tr=w-320,h-240,q-70",
        price: 10000,
        desc: "lorem ipsum"

    },
    {
        category:"chocolate",
        name:"ABC",
        img:"https://media.bakingo.com/sites/default/files/chocolate-truffle-cake-cake1627choc-A_0.jpg?tr=w-320,h-240,q-70",
        price: 10000,
        desc: "lorem ipsum"

    },
    {
        category:"chocolate",
        name:"ABC",
        img:"https://media.bakingo.com/sites/default/files/black-forest-cake-A.jpg?tr=w-320,h-240,q-70",
        price: 10000,
        desc: "lorem ipsum"

    },
    {
        category:"chocolate",
        name:"ABC",
        img:"https://media.bakingo.com/sites/default/files/kitkat-chocolate-cake-cake1119choc-A.jpg?tr=w-320,h-240,q-70",
        price: 10000,
        desc: "lorem ipsum"

    },
    {
        category:"butterscotch",
        name:"ABC",
        img:"https://media.bakingo.com/sites/default/files/round-shaped-butterscotch-cake-2-cake0618butt-A.jpg?tr=w-320,h-240,q-70",
        price: 10000,
        desc: "lorem ipsum"

    }
]


const seedDB = async ()=>{
    await Product.insertMany(products);
    console.log("Database seeded");
}

module.exports = seedDB;