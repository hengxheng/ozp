import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import headerLogo from "../../../img/logo.png";

import { connect } from "react-redux";
import { changeState } from "../../actions/mainMenu";

class Header extends React.Component {
    constructor(){
        super();
    }

    changeMenuState(e){
        e.preventDefault();
        console.log("click");
        console.log(this.props.menu.showMenu);
        this.props.changeMenuState(this.props.menu.showMenu);
    }

    render(){
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
    connect(mapStateToProps, mapDispatchToProps)(Header)
);