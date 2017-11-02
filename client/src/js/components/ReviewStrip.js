import React from "react";
import { Link } from "react-router-dom";
import config from "../app_config";
import axios from "axios";
import { ReviewBox } from "./ReviewBox";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';

export default class ReviewStrip extends React.Component{
    constructor(){
        super();
        this.state = {
            reviews: []
        }
    }

    componentDidMount(){
        let _reviews = [
            { 
                name: "Bella Osborne",
                content: "OZ Party Events - Best Events Company Ever! I came across Oz Party events on an online search one day and have found their service unbeatable in terms of creating bespoke corporate and individual events. I have used OZ."
            },
            {
                name: "test 1",
                content: "I have used OZ."
            },
            {
                name: "test 2",
                content: "Best Events Company Ever! I came across Oz Party events on an online search one day and have found their service unbeatable in terms of creating bespoke corporate and individual events. I have used OZ."
            }
        ];

        this.setState({
            reviews: _reviews
        });        
    }

    render() {
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
        return ( 
            <div id="homeReview" className="homeReview">
                <div className="site-inner">
                    <div className="homeReview-slider">          
                        <Slider {...settings}>
                        {   
                            this.state.reviews.map( (r, key) => {
                                return <div key={key}><ReviewBox key={key} review={r} /></div>
                            })
                        }
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}
