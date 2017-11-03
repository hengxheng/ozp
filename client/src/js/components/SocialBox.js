import React from 'react';

const SocialBox = (props) => {
    console.log(props.sfeed.type);
    if(props.sfeed.type == "instagram"){
        let imgStyle = {
            background: `url(${props.sfeed.image}) no-repeat center center`,
            backgroundColor: '#c6c6c6',
            backgroundSize: 'cover'
        }
        return (
            <div className="SocialBox insta">
                <div className="SocialBox-date">
                    <i className="fa fa-instagram" aria-hidden="true"></i><span>{ props.sfeed.date }</span>
                </div>
                <div className="SocialBox-content" style={ imgStyle }></div>
            </div>
        )
    }
    else if(props.sfeed.type == "twitter"){
        return (
            <div className="SocialBox tw">
                <div className="SocialBox-date">
                    <i className="fa fa-twitter" aria-hidden="true"></i> <span>{ props.sfeed.date }</span>
                </div>
                <div className="SocialBox-content">
                    <h3>OzParty Events</h3>
                    { props.sfeed.text }
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="SocialBox">
                <div className="SocialBox-date">
                    &nbsp;
                </div>
                <div className="SocialBox-content">
                </div>
            </div>
        )
    }
}

export default SocialBox;