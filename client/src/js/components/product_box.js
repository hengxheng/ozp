import React from "react";
import { Link } from "react-router-dom";

export const ProductBox = (props) => {
    let productImage = (<div className="product-img"></div>);
    if(props.product.image !== null){
        productImage = (<div className="product-img"><img src={ props.product.image } alt={props.product.name} /></div>);
    }
    
    return (
        <Link to={ `/product/${props.product.id}` }>
        <div id={ props.product.id }className="product-box">
            <div className="product-name">{ props.product.name }</div>
            { productImage }
        </div>
        </Link>
    );
}