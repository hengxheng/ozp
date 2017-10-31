import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import LogoSmall from "../../../img/logo-s.png";
import HeaderSearchForm from "./HeaderSearchForm";
import { connect } from "react-redux";
import { changeState } from "../../actions/HeaderAction";

class SiteHeader extends React.Component {
    constructor(){
        super();
    }

    changeMenuState(e){
        e.preventDefault();
        this.props.changeMenuState(this.props.menu.showMenu);
    }

    render(){
        return (
            <header className="site-header global">
                <div className="site-inner">
                    <div className="site-header-inner">
                        <div className="header-logo">
                            <Link to="/"><img src={ LogoSmall } alt="OzParty" /></Link>
                        </div>
                        <HeaderSearchForm/>
                        <div className="header-nav">
                            <ul>
                                <li><a href="#" className="header-enquiry-btn">Enquire Now</a></li>
                                <li><a href="#" id="nav-btn" 
                                onClick = { (e) => { this.changeMenuState(e)} } ><i className="fa fa-bars" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        menu: state.HeaderReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeMenuState: (showMenu) => {
            dispatch(changeState(showMenu));
        }
    };
};


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SiteHeader)
);