import React from "react";
import PropTypes from "prop-types";
import { renderRoutes } from 'react-router-config';
import  Header  from "../components/sections/header";
import  Navigation from "../components/sections/navigation";
import Routes from "../routes";
import { Footer } from "../components/sections/footer";

export default class App extends React.Component {

    ifHome(){
        let currentPath = this.props.location.pathname;
        return (currentPath == "/") ? true:  ((currentPath == "/home") ? true : false);
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <div className="container">
                <Header ifHome = { this.ifHome() }/>
                <Navigation/>
                <div className="page-main">
                    { renderRoutes( this.props.route.routes )}
                </div>
                <Footer/>
            </div>
        );
    }
} 
