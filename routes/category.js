const axios = require("axios"); // fetch json data, support promises and parallel request
const config = require("../config");
import Category from '../modules/category';


// test category id: 29962
const getCategory = (res, categoryId="") => {
    let url = `https://api.rezdy.com/v1/categories/${categoryId}?apiKey=${config.Api_key}`;
    axios.get(url, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if(response.data.requestStatus.success){
            res.setHeader('Content-Type', 'application/json'); 
            res.json(response.data.category);
        }
    })
    .catch(error => {
        console.log(error);
    });
}

const getCategories = (req, res) => {

    let url = `https://api.rezdy.com/v1/categories?apiKey=${config.Api_key}`;

    axios.get(url, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if(response.data.requestStatus.success){
            res.setHeader('Content-Type', 'application/json');
            res.json(response.data.categories);
        }
    })
    .catch(error => {
        console.log(error);
    });
}



module.exports = { getCategory, getCategories };