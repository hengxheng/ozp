import React from 'react';

const BlogBox = (props) => {
    const imgStyle = {
        backgroundColor: '#efefef',
        background: `url(${props.blog.image}) no-repeat center center #efefef`,
        backgroundSize: 'cover'
    }

    return(
        <div className="blog-box">
            <div className="blog-box-img" style={imgStyle}></div>
            <div className="blog-box-text">
                <div className="blog-name">{ props.blog.name }</div>
                <div className="blog-cat">{ props.blog.cat }</div>
            </div>
        </div>
    )
    
}

export default BlogBox;