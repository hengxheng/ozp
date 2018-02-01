const axios = require("axios"); // fetch json data, support promises and parallel request
const config = require("../config");

// test product code: PZELUV
// test category id: 29962
export const getProduct = (res, productCode="") => {
    let url = `https://api.rezdy.com/v1/products/${productCode}?apiKey=${config.Api_key}`;


    axios.get(url, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if(response.data.requestStatus.success){
            res.setHeader('Content-Type', 'application/json');
            res.json(response.data.product);
        }
    })
    .catch(error => {
        console.log(error);
    });
}

export const getProducts = (res, productCode="") => {
    
    let url = `https://api.rezdy.com/v1/products?apiKey=${config.Api_key}`;
    axios.get(url, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if(response.data.requestStatus.success){
            res.setHeader('Content-Type', 'application/json');
            res.json(response.data.products);
        }
    })
    .catch(error => {
        console.log(error);
    });
}

export const getProductByCategory = (res, categoryId) => {
    let url = "";
    if(categoryId === ""){
        url = `https://api.rezdy.com/v1/products?apiKey=${config.Api_key}`;
    }
    else{
        url = `https://api.rezdy.com/v1/categories/${categoryId}/products?apiKey=${config.Api_key}`;
    }

    axios.get(url, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
        }
    })
    .then(response => {
        res.setHeader('Content-Type', 'application/json');
        if(response.data.requestStatus.success){
            res.json(response.data.products);
        }
    })
    .catch(error => {
        console.log(error);
    });
};

export const getProductFromDrupal = (res, productCode="") => {
    const url = `${config.drupal_url}package/${productCode}`;
    axios.get(url, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'
        }
    })
    .then(response => {
        res.setHeader('Content-Type', 'application/json');
        res.json(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}
