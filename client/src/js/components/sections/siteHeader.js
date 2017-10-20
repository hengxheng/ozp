import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import LogoSmall from "../../../img/logo-s.png";

import { connect } from "react-redux";
import { changeState } from "../../actions/mainMenu";

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
                        <div id="header-search">
                            <form id="header-search-form" action="">
                                <div className="search-box-1">
                                    <input type="text" name="location" value="" placeholder="e.g. Sydney" />
                                </div>
                                <div className="search-box-2">
                                    <input id="search-cat" type="text" name="cat" value="" placeholder="e.g. Hens night" />
                                </div>
                                <div className="search-box-3">
                                    <input type="submit" value="Search"/>
                                </div>
                            </form>
                        </div>
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
        menu: state.menuReducer
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