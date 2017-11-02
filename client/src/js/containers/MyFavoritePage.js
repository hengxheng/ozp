import React from "react";
import { Link } from "react-router-dom";
import * as myFav from "../helperFav";
import axios from "axios";
import { ProductBox } from "../components/ProductBox";
import DayPickerInput from "react-day-picker/DayPickerInput";
import 'react-day-picker/lib/style.css';

export default class MyFav extends React.Component{
    constructor(){
        super();
        this.state = {
            fav: []
        }
    }

    componentWillMount(){
        
    }

    componentDidMount(){
        const fav = myFav.getAllFav();
        let products = [];

        if(fav.length > 0){
            fav.map( (i) => {
                axios.get(`/api/product/${i}`)
                .then(res => {
                    products.push(res.data);
                    this.setState({
                       fav : products
                    });
                });
            });
        }
        
    }

    render() {
        console.log(this.state.fav);
        return ( 
            <div id="my-favorite-page" className="my-favorite-page normal-page">
                <div className="site-inner">
                    <div className="breadcrumb">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li>My Favorite</li>
                        </ul>
                    </div>
                    <div className="with-left-column">
                        <div className="sidebar-col">
                            <div className="fav-form">
                                <div className="fav-form-title">
                                    Enquire about 'Favorite' packages
                                </div>
                                <div className="fav-form-body">
                                    <h3>Contact our Event Experts</h3>
                                    <form id="favorite-form" className="favorite-form">
                                        <div className="form-row">
                                            <input type="text" placeholder="Name*" required/>
                                        </div>
                                        <div className="form-row">
                                            <input type="email" placeholder="Email*" required/>
                                        </div>
                                        <div className="form-row">
                                            <input type="text" placeholder="Phone*" required/>
                                        </div>
                                        <div className="form-row">
                                            <input type="text" placeholder="Preferred budget" required/>
                                        </div>
                                        <div className="form-row">
                                            <label htmlFor="fav-date">PREFERRED DATE</label>
                                            <DayPickerInput id="fav-date" name="date" placeholder="YYYY-MM-DD" format="YYYY-MM-DD" />
                                        </div>
                                        <div className="form-row">
                                            <textarea placeholder="Tell us more"/>
                                        </div>
                                        <div className="form-row">
                                            <input type="submit" className="btn" value="Enquire now"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="main-with-sidebar">
                            <div className="my-favorite-inner">
                                {                     
                                    this.state.fav.map( (p, key) => {
                                        let thumbnail = (typeof(p.images[0])!=="undefined") ? p.images[0].itemUrl : null;
                                        let product = {
                                            id: p.productCode,
                                            name: p.name,
                                            image: thumbnail,
                                            desc: p.shortDescription,
                                            price: p.advertisedPrice
                                        }
                                        return <ProductBox key={key} product={ product }/>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}