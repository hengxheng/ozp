import React from 'react';
import config from '../config';

const BlogBox = (props) => {
    const imgStyle = {
        backgroundColor: '#efefef',
        background: `url(${config.drupal_url}${props.blog.field_images}) no-repeat center center #efefef`,
        backgroundSize: 'cover'
    }

    return(
        <div className="blog-box">
            <div className="blog-box-img" style={imgStyle}></div>
            <div className="blog-box-text">
                <div className="blog-name">{ props.blog.name }</div>
                <div className="blog-cat">Blog</div>
            </div>
        </div>
    )
}

export default BlogBox;