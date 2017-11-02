import React from "react";
import PropTypes from "prop-types";
import { renderRoutes } from 'react-router-config';
import  Header  from "../components/Layout/Header";
import  Navigation from "../components/Layout/Navigation";
import Routes from "../routes";
import { Footer } from "../components/Layout/Footer";
import SiteHeader from "../components/Layout/SiteHeader";

export default class App extends React.Component {

    ifHome(){
        let currentPath = this.props.location.pathname;
        return (currentPath == "/") ? true:  ((currentPath == "/home") ? true : false);
    }

    componentDidMount(){   
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
            </div>
        );
    }
} 
