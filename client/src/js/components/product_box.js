import React from "react";

export const ProductBox = (props) => {
    let productImage = (<div className="product-img"></div>);
    if(props.product.image !== null){
        productImage = (<div className="product-img"><img src={ props.product.image } alt={props.product.name} /></div>);
    }
    
    return (
        <div id={ props.product.id }className="product-box">
            <div className="product-name">{ props.product.name }</div>
            { productImage }
        </div>
    );
}