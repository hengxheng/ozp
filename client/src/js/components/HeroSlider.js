import React from "react";

const HeroSlider = (props) => {
    const imgStyle = {
        background: `url(${props.slider.image}) no-repeat center center`,
        backgroundColor: '#c6c6c6',
        backgroundSize: 'cover'
    }

    return (
        <div id={props.keyID} className="HeroSliderItem" style={ imgStyle }>
            <div className="HeroSliderItem-inner">
                <div className="HeroSliderItem-content">
                    <div className="site-inner">
                        <div className="HeroSliderItem-content-inner">
                            <h2>{props.slider.title}</h2>
                            <div className="HeroSliderText">
                                {props.slider.text}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSlider;