const express = require('express');
const router = express.Router();

const product = require('./product.js');
const category = require('./category.js');

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', (req, res) => {
    res.send('api works!');
});

router.get('/product', (req, res)=>{
    product.getProduct(res, "");
});

router.get('/product/:productcode', (req, res) => {
    product.getProduct(res, req.params.productcode);
});

router.get('/category', (req, res)=>{
    category.getCategories(req, res);
});

router.get('/category/:categoryId', (req, res) => {
    category.getCategory(res, req.params.categoryId);
});

router.get('/category/product/:categoryId', (req, res) => {
    product.getProductByCategory(res, req.params.categoryId);
});


module.exports = router; 