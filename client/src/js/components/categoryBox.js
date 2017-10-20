import React from "react";
import { Link } from "react-router-dom";

export const CategoryBox = (props) => {
    let imgStyle = {
        background: '#c6c6c6'
    };
    if(props.category.image != null){
        imgStyle = {
            background: `url(${props.category.image.itemUrl}) no-repeat center center #c6c6c6`,
            backgroundSize: 'cover'
        }
    }

    return (
        <div className="category-box">
            <Link to={ `/category/${props.category.id}` }>
                <div className="category-box-inner">
                    <div className="category-box-img" style={ imgStyle } ></div>
                    <div className="category-box-name">{props.category.name}</div>
                </div>
            </Link>
        </div>
    );
}