import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Header } from "../components/sections/header";
import { Navigation } from "../components/sections/navigation";
import Routes from "../routes";
import { changeState } from "../actions/menuAction";

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="page-container">
                    <Header changeMenu={ () => this.props.changeMenuState( this.props.menu.showMenu) }/>
                    { this.props.children } 
                </div>
                <div className="site-menu">
                     <Navigation menuState={ this.props.menu.showMenu } /> 
                </div>
                <div className="page-content">
                    <Routes/>
                </div> 
            </div>
        );
    }
} 

App.propTypes = {
    menuState: PropTypes.bool,
    changeMenuState: PropTypes.func
};


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
    connect(mapStateToProps, mapDispatchToProps)(App)
);