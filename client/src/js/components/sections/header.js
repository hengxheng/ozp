import React from "react";
import {link} from "react-router";
import headerLogo from "../../../img/logo.png";

export const Header = (props) => {
    return (
        <header className="site-heaader home-header">
            <div className="site-inner">
                <div className="header-logo">
                    <img src={ headerLogo } alt="OzParty" />
                </div>
                <div className="header-nav">
                    <ul>
                        <li><a href="#" className="header-enquiry-btn">Enquire Now</a></li>
                        <li><a href="#" id="nav-btn" 
                        onClick = { () => props.changeMenu() } ><i className="fa fa-bars" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};