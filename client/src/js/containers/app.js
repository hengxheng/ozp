import React from "react";
import PropTypes from "prop-types";
import { renderRoutes } from 'react-router-config';
import  Header  from "../components/sections/header";
import  Navigation from "../components/sections/navigation";
import Routes from "../routes";
import { Footer } from "../components/sections/footer";
import SiteHeader from "../components/sections/siteHeader";

export default class App extends React.Component {

    ifHome(){
        let currentPath = this.props.location.pathname;
        return (currentPath == "/") ? true:  ((currentPath == "/home") ? true : false);
    }

    componentDidMount(){
        window.addEventListener('scroll', (e) => {
            let top = window.pageYOffset || document.documentElement.scrollTop;
            console.log(top);
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
