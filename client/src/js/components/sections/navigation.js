import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = (props) => {
    let showMenu = "";
    if(props.menuState){
        showMenu = "show";
    }

    return (
        <nav id="site-navigation" className={`site-navigation ${showMenu}` }>
            <ul>
                <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/category" activeClassName="active">Category</NavLink></li>
                <li><NavLink to="/product" activeClassName="active">Product</NavLink></li>
             </ul>
        </nav>
    );
}