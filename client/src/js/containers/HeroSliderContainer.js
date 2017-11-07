import React from "react";
import axios from "axios";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import HeroSlider from "../components/HeroSlider";

export default class HeroSliderContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sliders: [],
        }
    }

    componentDidMount(){
        let _sliders = [
            {
                image: "",
                title: "Build Your Own Package",
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
            },
            {
                image: "",
                title: "Build Your Own Package",
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
            },
            {
                image: "",
                title: "Build Your Own Package",
                text: "Lorem ipsum dolor sit amet, consectetuer laoreet dolore magna aliquam erat volutpat."
            }
        ];

        this.setState({
            sliders: _sliders
        })
    }

    render(){
        var settings = {
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            dots: true,
            dotsClass: "sliderDots",
        };

        return(
            <div className="HeroSlider" id={this.props.sliderName}>
                 <Slider {...settings}>
                    { 
                        this.state.sliders.map( (i,key) => {
                            return <div key={key}><HeroSlider keyID={this.props.sliderName+key} slider={i} /></div>
                        })
                    }
                 </Slider>
            </div>
        )
    }
}