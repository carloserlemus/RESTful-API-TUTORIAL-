// import express package
const express = require('express');

// execute express so we can use express stuff!
const app = express();

// import productRoutes


// REQUESTS are forwarded to product.js if the URL they are targetting 
// ends with /products
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// use sets up a middleware.. and incoming request has to go through app.use
// and whatever we pass to it.

app.use('/products', productRoutes); // Anything in the url that has /products will forward to products.js
app.use('/orders', orderRoutes);

module.exports = app;