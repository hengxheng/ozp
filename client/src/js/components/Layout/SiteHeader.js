import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import LogoSmall from "../../../img/logo-s.png";
import HeaderSearchForm from "./HeaderSearchForm";
import { connect } from "react-redux";
import { changeState, loadFavCount } from "../../actions/HeaderAction";
import { getAllFav } from "../../helperFav";

class SiteHeader extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let favCount  = getAllFav();
        this.props.loadFavCount(favCount.length);
    }

    changeMenuState(e){
        e.preventDefault();
        this.props.changeMenuState(this.props.header.showMenu);
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
                                <li><a href="#" className="nav-btn" 
                                onClick = { (e) => { this.changeMenuState(e)} } ><i className="fa fa-bars" aria-hidden="true"></i><span className="favCount">{ this.props.header.favCount }</span></a></li>
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
        header: state.HeaderReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeMenuState: (showMenu) => {
            dispatch(changeState(showMenu));
        },
        loadFavCount: (n) => {
            dispatch(loadFavCount(n));
        }
    };
};


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SiteHeader)
);