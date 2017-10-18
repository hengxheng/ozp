import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeState } from "../../actions/mainMenu";

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
                <div className="site-nav-header">
                    <a href="#" id="site-nav-close" onClick={ (e) => {this.changeMenuState(e)} }>X</a>
                </div>
                <ul>
                    <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/category" activeClassName="active">Category</NavLink></li>
                    <li><NavLink to="/product" activeClassName="active">Product</NavLink></li>
                 </ul>
            </nav>
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
    connect(mapStateToProps, mapDispatchToProps)(Navigation)
);