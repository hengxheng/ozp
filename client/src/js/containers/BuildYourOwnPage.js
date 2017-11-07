import React from 'react';
import HeroSliderContainer from "./HeroSliderContainer";

export default class BuildYourOwn extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="buildyouown-page">
                <HeroSliderContainer sliderName="buildown"/>
                <div className="site-inner">
                    <h1>Build Your Own</h1>
                </div>
            </div>
        )
    }
} 