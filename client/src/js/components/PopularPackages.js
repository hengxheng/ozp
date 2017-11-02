import React from "react";
import { Link } from "react-router-dom";
import config from "../app_config";
import axios from "axios";
import { ProductBox } from "./ProductBox";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import BuildOwn from "../../img/buildown.png";

export default class PopularPackages extends React.Component{
    constructor(props){
        super(props);
        this.state={
            products: []
        }
    }

    componentDidMount(){
        const popularpackageID = "29962";
        axios.get(`/api/category/product/${ popularpackageID }`)
        .then(res => {
            this.setState( { products: res.data} ); 
        });
    }

    render(){
        var settings = {
            infinite: true,
            speed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            dots: true,
            dotsClass: "sliderDots",
        };
        return (
            <div className="popularPackages-strip home-section">
                <h3 className="section-title">Popular Packages</h3>
                <div className="big-site-inner">
                <div className="popularPackages-inner">
                    <div className="popularSlider">
                        <Slider {...settings}>
                            {
                                this.state.products.map( (p, key) => {
                                    let thumbnail = (typeof(p.images[0])!=="undefined") ? p.images[0].itemUrl : null;
                                    let product = {
                                        id: p.productCode,
                                        name: p.name,
                                        image: thumbnail,
                                        desc: p.shortDescription,
                                        price: p.advertisedPrice
                                    }
                                    return <div key={key}><ProductBox key={key} product={ product }/></div>
                                })
                            }
                        </Slider>
                    </div>
                    <div className="popularCustom">
                        <div className="product-box custom-product">
                            <Link to={ "/buildyourown" }>
                                <div className="custom-product-inner">
                                    <img className="buildyourown-img" src={ BuildOwn } alt="Build your own"/>
                                    <h2>Build your<br/>own package</h2>
                                </div>
                            </Link>   
                            <div className="product-box-meta">
                                from <span className="p-price">$00.00</span>
                            </div>   
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}