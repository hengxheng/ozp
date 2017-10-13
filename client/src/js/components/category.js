import React from "react";
import { Link } from "react-router-dom";
import config from "../app_config";
import { routeCodes } from "../routes";
import axios from "axios";

export default class Category extends React.Component {
    constructor(){
        super();
        this.state = { categories: [] }
    }

    componentDidMount(){
        axios.get(`/api/category`)
        .then(result => {
            this.setState( { categories: result.data} ); 
        });
    }

    render() {
        return (
            <div className="category-page">
                <h3>Category</h3>
                <ul>
                    { this.state.categories.map( (category, i) => {
                        return <li key={i}><Link to={ `/category/${category.id}` }>{ category.name }</Link></li>
                    })}
                </ul>
            </div>
        );
    }
}
