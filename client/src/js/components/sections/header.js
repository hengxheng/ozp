import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../../img/logo.png";

export default class Header extends React.Component {
    constructor(){
        super();
    }

    render (){

        return (
            <header className={ "site-header "+ (this.props.ifHome ? "home-header" : "") }>
                <div className="site-inner">
                    <div className="site-header-inner">
                        <div className="header-logo">
                            <Link to="/"><img src={ headerLogo } alt="OzParty" /></Link>
                        </div>
                        <div className="header-nav">
                            <ul>
                                <li><a href="#" className="header-enquiry-btn">Enquire Now</a></li>
                                <li><a href="#" id="nav-btn" 
                                onClick = { () => this.props.changeMenu() } ><i className="fa fa-bars" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}