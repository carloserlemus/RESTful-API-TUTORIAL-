// import express package
const express = require('express');

// import body parser.

const bodyParser = require('body-parser');

// execute express so we can use express stuff!
const app = express();
// Morgan: Logging Package. To log incoming requests.
const morgan = require('morgan');

// import productRoutes
// REQUESTS are forwarded to product.js if the URL they are targetting 
// ends with /products
//Routes that handle requests.
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// test
app.get('/user/:id', function (req, res, next) {
    res.end(req.params.id)
})

// use sets up a middleware.. and incoming request has to go through app.use
// and whatever we pass to it.

app.use('/products', productRoutes); // Anything in the url that has /products will forward to products.js
app.use('/orders', orderRoutes);

// Error Handling

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);    // Forwards to the next error...
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;