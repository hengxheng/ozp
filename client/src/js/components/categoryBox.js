import React from "react";
import { Link } from "react-router-dom";

export const CategoryBox = (props) => {
    let categoryImage = (props.category.image != null)?
    (<div className="category-box-img"><img src={ props.category.image.itemUrl } alt={props.category.name} /></div>)
    : (<div className="category-box-img"></div>);

    return (
        <div className="category-box">
            <Link to={ `/category/${props.category.id}` }>
                <div className="category-box-inner">
                    { categoryImage }
                    <div className="category-box-name">{props.category.name}</div>
                </div>
            </Link>
        </div>
    );
}