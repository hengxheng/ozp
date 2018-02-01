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
        // axios.get(`/api/product/${code}`)
        // .then(result => {
        //     this.setState( { 
        //         product: result.data 
        //     }); 
        //     console.log(this.state);
        // });

        // axios.get(`/api/package/${code}`)
        // .then(result => {
        //     this.setState( { 
        //         body: result.data
        //     }); 
        //     console.log(this.state);
        // });

        const axiosOptions = [{
            url: `/api/product/${code}`,
            method: 'get'
        },
        {
            url: `/api/package/${code}`,
            method: 'get'
        }];
        axios.all([
            axios.request(axiosOptions[0]),
            axios.request(axiosOptions[1])
        ]).then(axios.spread( (res1, res2) => {
            const res = {
                product: res1.data,
                body: res2.data
            }
            this.setState(res);
            console.log(this.state);
        }));
    }

    createRawHTML(){
        return { __html: this.state.product.description }
    }

    bodyHTMLFromDrupal(){
        return { __html: this.state.body.body }
    }
    
    render() {
        return (
            <div className="product-page">
                <div className="product-page-main">
                    <h1>{ this.state.product.name }</h1>
                    <div className="site-inner">
                        <div className="product-content" dangerouslySetInnerHTML= { this.bodyHTMLFromDrupal() }></div>
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