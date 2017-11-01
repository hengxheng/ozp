import React from "react";
import { Link } from "react-router-dom";

export const CategoryBox = (props) => {
    let imgStyle = {
        backgroundColor: '#efefef',
        background: `url(${props.category.image.itemUrl}) no-repeat center center #efefef`,
        backgroundSize: 'cover'
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