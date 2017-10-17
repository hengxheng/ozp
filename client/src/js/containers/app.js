import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import  Header  from "../components/sections/header";
import { Navigation } from "../components/sections/navigation";
import Routes from "../routes";
import { changeState } from "../actions/menuAction";
import { Footer } from "../components/sections/footer";

class App extends React.Component {

    ifHome(){
        let currentPath = this.props.location.pathname;
        return (currentPath == "/") ? true:  ((currentPath == "/home") ? true : false);
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <div className="container">
                <Header changeMenu={ () => this.props.changeMenuState( this.props.menu.showMenu) } ifHome = { this.ifHome() }/>

                <div className="site-menu">
                     <Navigation menuState={ this.props.menu.showMenu } /> 
                </div>
                <div className="page-main">
                    { renderRoutes( this.props.route.routes )}
                </div>

                <Footer/>
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