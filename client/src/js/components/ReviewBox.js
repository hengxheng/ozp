import React from "react";

export const ReviewBox = (props) => {
    let imgStyle = {
        backgroundColor: '#efefef',
        background: `url(${props.review.image}) no-repeat center center #efefef`,
        backgroundSize: 'cover'
    }
    return (
        <div className="review-box">
            <div className="review-box-inner">
                <div className="review-box-img" style={ imgStyle } ></div>
                <div className="review-box-name">{props.review.name}</div>
                <div className="review-box-content">{props.review.content}</div>
            </div>
        </div>
    );
}