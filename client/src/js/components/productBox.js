import React from "react";
import { Link } from "react-router-dom";
import { addToFav } from "../helper";

export const ProductBox = (props) => {
    let imgStyle = {
        background: '#c6c6c6'
    };
    if(props.product.image != null){
        imgStyle = {
            background: `url(${props.product.image}) no-repeat center center`,
            backgroundColor: '#c6c6c6',
            backgroundSize: 'cover'
        }
    }

    return (
        <div id={ props.product.id }className="product-box">
            <Link className="product-box-link" to={ `/product/${props.product.id}` }>
                <div className="product-img-box" style={ imgStyle }>
                    <div className="product-name">{ props.product.name }</div>
                    <div className="product-desc">
                        <div className="p-name">
                            { props.product.name }
                        </div>
                        <div className="p-desc">
                            { props.product.desc }
                        </div>
                    </div>
                </div>
            </Link>   
            <div className="product-box-meta">
                from <span className="p-price">${ props.product.price }</span> 
                <a href="#" className="add-to-fav" onClick={ () => addToFav(props.product.id) } ></a>
            </div>   
        </div>
    );
}