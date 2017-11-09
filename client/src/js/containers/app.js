import React from "react";
import PropTypes from "prop-types";
import { renderRoutes } from 'react-router-config';
import Header  from "../components/Layout/Header";
import Navigation from "../components/Layout/Navigation";
import Routes from "../routes";
import Footer from "../components/Layout/Footer";
import SiteHeader from "../components/Layout/SiteHeader";
import LoadingOver from "../components/Layout/LoadingOver";
import axios from "axios";
import { connect } from "react-redux";
import { loadSearchCategory,  updateSearchCategory } from "../actions/HeaderAction";

class App extends React.Component {

    constructor(props){
        super(props);
    }

    ifHome(){
        let currentPath = this.props.location.pathname;
        return (currentPath == "/") ? true:  ((currentPath == "/home") ? true : false);
    }

    componentDidMount(){   
        axios.get(`/api/category`)
        .then(res => {
            let _cat = res.data;
            let cat = [];
            res.data.map( (i) => {
                // if(i.visible){
                    cat.push(i);
                // }
            });
            // load all category data into global state for global usage
            this.props.loadCategories(cat);
        });

        window.addEventListener('scroll', (e) => {
            if(this.ifHome()){
                let top = window.pageYOffset || document.documentElement.scrollTop;
                let homeHeader = document.querySelector(".home-header");
                let siteHeader = document.querySelector(".global");
                if(top>20){
                    homeHeader.classList.add("hide");
                    siteHeader.classList.add("nohide");
                }
                else{
                    homeHeader.classList.remove("hide");
                    siteHeader.classList.remove("nohide");
                }
            }
        });
    }

    render() {
        return (
            <div className={ (this.ifHome()) ? "container home-page":"container" } >
                <Header/>
                <SiteHeader/>
                <Navigation/>
                <div className="page-main">
                    { renderRoutes( this.props.route.routes )}
                </div>
                <Footer/>
                <LoadingOver loading={this.props.header.categoryLoaded}/>
            </div>
        );
    }
} 

const mapStateToProps = (state) => {
    return {
        header: state.HeaderReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCategories: (categories) =>{
            dispatch(loadSearchCategory(categories))
        },
        loadParam: (location, category) => {
            dispatch(updateSearchCategory(location, category))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
