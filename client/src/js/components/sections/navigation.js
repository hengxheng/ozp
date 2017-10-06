import React from "react";
import { NavLink } from "react-router-dom";
import { routeCodes } from "../../routes";

export const Navigation = (props) => {
    let showMenu = "";
    if(props.menuState){
        showMenu = "show";
    }

    return (
        <nav id="site-navigation" className={`site-navigation ${showMenu}` }>
            <ul>
                <li><NavLink to={ routeCodes.HOME } activeClassName="active">Home</NavLink></li>
                <li><NavLink to={ routeCodes.CATEGORY } activeClassName="active">Category</NavLink></li>
                <li><NavLink to={ routeCodes.PRODUCT } activeClassName="active">Product</NavLink></li>
             </ul>
        </nav>
    );
}