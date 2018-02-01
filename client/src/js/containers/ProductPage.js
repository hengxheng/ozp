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
            
            
            document.querySelector(".tab-header ul li a").classList.add("actived");
            document.querySelector(".tab-content").classList.add("show");
            var tabLinks = document.querySelectorAll(".tab-header ul li a");
            Array.from(tabLinks).map( (i, k)=> {
                i.addEventListener("click", function(e){
                    e.preventDefault();
                    if(!this.classList.contains("actived")){
                        Array.from(tabLinks).map( (t) => t.classList.remove("actived") );
                        this.classList.add("actived");

                        Array.from(document.querySelectorAll(".tab-content")).map( (x) => { x.display = "none" });
                        Array.from(document.querySelectorAll(".tab-content")).map( (c) => { c.classList.remove("show") });
                        var tabID = this.getAttribute("href").substring(1);
                        document.getElementById(tabID).classList.add("show");
                    }

                    
                });
            });


            Array.from(document.querySelectorAll(".accordion-block .accordion-header")).map( (i) => {
                i.addEventListener("click", function(e){
                    if(this.classList.contains("show")){
                        this.classList.remove("show");
                        this.nextElementSibling.classList.remove("show");
                    }
                    else{
                        this.classList.add("show");
                        this.nextElementSibling.classList.add("show");
                    }  
                });
            });
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
                <div className="site-inner">    
                    <div className="product-page-main">
                        <h1>{ this.state.product.name }</h1> 
                        <div className="product-content" dangerouslySetInnerHTML= { this.bodyHTMLFromDrupal() }></div>
                        <div className="product-descript" dangerouslySetInnerHTML={ this.createRawHTML() } />
                        {/* <div className="product-terms">
                            <h2>Terms</h2>
                            { this.state.product.terms }
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}