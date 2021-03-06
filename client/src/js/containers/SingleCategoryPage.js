import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ProductBox } from "../components/ProductBox";

export default class SingleCategory extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            category: {},
            products: []
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        axios.get(`/api/category/product/${ id }`)
        .then(result => {
            this.setState( { products: result.data} ); 
        });
    }

    render() {
        let sid = `cat-${this.props.match.params.id}`;
        return ( 
            <div id={ sid } className="single-category">
                <div className="site-inner">
                    <div className="single-category-inner">
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
                                return <ProductBox key={key} product={ product }/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
