import React from 'react';
import axios from 'axios';
import SocialBox from './SocialBox';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';

export default class SocialStrip extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoading: true,
            sf: []
        }
    }

    componentDidMount(){
        axios.get("/api/social")
        .then(res => {
            this.setState({
                sf: res.data
            });
        });
    }

    render(){
        var settings = {
            infinite: true,
            speed: 2000,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            dots: false,
        };

        return (
            <div className="SocialStrip home-section">
                <div className="site-inner">
                    <h3 className="section-title">Trending via #ozpartyevents</h3>
                </div>
                <div className="SocialStrip-inner">
                    <Slider {...settings}>
                    {
                        this.state.sf.map( (i, key) => {
                        return <div className="SocialBoxWrapper" key={ key }><SocialBox key={ key } sfeed = {i} /></div>
                        })
                    }
                    </Slider>
                </div>
            </div>
        );
    }
}