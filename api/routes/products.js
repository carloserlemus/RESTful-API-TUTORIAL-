const express = require('express');

/* router is a sub package express ships with
which gives us different capabilities for reaching
different end points.
*/
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /products'
    })
})

// GET specific products
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special'){
        res.status(200).json({
            message: 'You discovered the special id',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

//PATCH
router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated Product'
    })
});

//DELETE
router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted Product'
    })
});

module.exports = router;

