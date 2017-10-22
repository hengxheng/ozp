import React from "react";
import { Link } from "react-router-dom";
import { addToFav, removeFromFav, checkFavExits } from "../helper";

export class ProductBox extends React.Component {
    constructor(){
        super();
        this.state = {
            fav_class : "add-to-fav",
            fav_added : false
        }
    }
    
    componentDidMount(){
        if(checkFavExits(this.props.product.id)){
            this.setState({
                fav_class : "add-to-fav added-to-fav",
                fav_added : true
            });
        }
    }

    
    updateFav(e, added, productCode){
        e.preventDefault();
        if(this.state.fav_added){
            removeFromFav(productCode);
            this.setState({
                fav_class : "add-to-fav",
            });
        }
        else{
            addToFav(productCode);
            this.setState({
                fav_class : "add-to-fav added-to-fav",
            });
        }
    };
    
    render(){
        let imgStyle = {
            background: '#c6c6c6'
        };

        if(this.props.product.image != null){
            imgStyle = {
                background: `url(${this.props.product.image}) no-repeat center center`,
                backgroundColor: '#c6c6c6',
                backgroundSize: 'cover'
            }
        }

        return (
            <div id={ this.props.product.id }className="product-box">
                <Link className="product-box-link" to={ `/product/${this.props.product.id}` }>
                    <div className="product-img-box" style={ imgStyle }>
                        <div className="product-name">{ this.props.product.name }</div>
                        <div className="product-desc">
                            <div className="p-name">
                                { this.props.product.name }
                            </div>
                            <div className="p-desc">
                                { this.props.product.desc }
                            </div>
                        </div>
                    </div>
                </Link>   
                <div className="product-box-meta">
                    from <span className="p-price">${ this.props.product.price }</span> 
                    <a href="#" className={ this.state.fav_class } onClick={ (e) => this.updateFav(e, this.state.fav_added, this.props.product.id) } ></a>
                </div>   
            </div>
        );
    }
}