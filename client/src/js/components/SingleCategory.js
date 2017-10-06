import React from "react";
import config from "../app_config";
import axios from "axios";
import { ProductBox } from "./product_box";

export default class SingleClass extends React.Component{
    constructor(){
        super();
        this.state = { 
            category: {},
            products: []
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        axios.get(`${ config.api_url}/api/category/product/${ id }`)
        .then(result => {
            this.setState( { products: result.data} ); 
        });
    }
    render() {
        return (  
            <div id={ this.props.match.params.id } className="single-category">
                {
                    this.state.products.map( (p, key) => {
                        let thumbnail = (typeof(p.images[0])!=="undefined") ? p.images[0].itemUrl : null;
                        let product = {
                            id: p.productCode,
                            name: p.name,
                            image: thumbnail
                        }
                        return <ProductBox key={key} product={ product }/>
                    })
                }
            </div>
        )
    }
}
