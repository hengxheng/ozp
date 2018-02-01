const express = require('express');
const router = express.Router();

import { getProduct, getProducts, getProductByCategory, getProductFromDrupal } from './Product';
import { getCategory, getCategories } from './Category';
import { getSocialFeed } from './SocialFeed';
import { getHomeBlog } from './HomeBlog';

router.use(function(req, res, next) {
    // do logging
    // console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', (req, res) => {
    res.send('api works!');
});

router.get('/product', (req, res)=>{
    getProduct(res, "");
});

router.get('/product/:productcode', (req, res) => {
    getProduct(res, req.params.productcode);
});

router.get('/category', (req, res)=>{
    getCategories(req, res);
});

router.get('/category/:categoryId', (req, res) => {
    getCategory(res, req.params.categoryId);
});

router.get('/category/product/:categoryId', (req, res) => {
    getProductByCategory(res, req.params.categoryId);
});

router.get('/social', (req, res) => {
    getSocialFeed(res);
});

router.get('/homeblog', (req, res) => {
    getHomeBlog(res);
});

router.get('/package/:productCode', (req, res)=> {
    getProductFromDrupal(res, req.params.productCode);
});

// router.get('/blog/:blogId')

module.exports = router; 