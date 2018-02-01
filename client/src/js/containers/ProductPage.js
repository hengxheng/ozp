import React from "react";
import axios from "axios";

export default class Product extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
                        product: {},
                        body: {} 
                    }
    }

    componentDidMount(){
        let code = this.props.match.params.code;
        axios.get(`/api/product/${code}`)
        .then(result => {
            this.setState( { product: result.data } ); 
        });

        axios.get(`/api/package/${code}`)
        .then(result => {
            this.setState( { body: result.data} ); 
        });
    }

    createRawHTML(){
        return { __html: this.state.product.description }
    }

    bodyHTMLFromDrupal(){
        return { __html: this.state.body }
    }
    
    render() {
        return (
            <div className="product-page">
                <div className="product-page-main">
                    <div className="site-inner">
                        <div className="product-content">

                        </div>
                        <h1>{ this.state.product.name }</h1>
                        <div className="product-descript" dangerouslySetInnerHTML={ this.createRawHTML() } />
                        <div className="product-terms">
                            <h2>Terms</h2>
                            { this.state.product.terms }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}