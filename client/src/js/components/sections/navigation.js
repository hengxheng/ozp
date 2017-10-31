import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeState } from "../../actions/HeaderAction";

class Navigation extends React.Component{
    constructor(){
        super();
    }    

    changeMenuState(e){
        e.preventDefault();
        this.props.changeMenuState(this.props.menu.showMenu);
    }

    render(){
        let showMenu = "";
        if(this.props.menu.showMenu){
            showMenu = "show";
        }
    
        return (
            <nav id="site-navigation" className={`site-navigation ${showMenu}` }>
                <div className="site-nav-inner">
                    <div className="site-nav-header">
                        <a href="#" id="site-nav-close" onClick={ (e) => {this.changeMenuState(e)} }>X</a>
                    </div>
                    <div className="site-nav-middle">
                        <ul>
                            <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
                            <li><NavLink to="/category" activeClassName="active">Category</NavLink></li>
                            <li><NavLink to="/my-favorite" activeClassName="active">My favorite</NavLink></li>
                        </ul>
                    </div>
                    <div className="site-nav-bottom">
                        <div className="site-nav-info">
                            <p><span>Call Us</span>: <a href="tel:1800697278">1800 697 278</a></p>
                            <p><span>Email</span>: <a href="mailto:info@ozpartyevents.com.au">info@ozpartyevents.com.au</a></p>
                            <p><span>Sydney office</span>: 124 George St, Sydney</p>
                        </div>
                        <div className="site-nav-social">
                            <ul>
                                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-snapchat-ghost" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
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
    connect(mapStateToProps, mapDispatchToProps)(Navigation)
);