import React from "react";
import { Link } from "react-router-dom";
import config from "../app_config";
import { routeCodes } from "../routes";
import axios from "axios";
import { CategoryBox } from "../components/CategoryBox";

export default class Category extends React.Component {
    constructor(props){
        super(props);
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
                <div className="site-inner">
                    <h3>Category</h3>
                    <div className="category-block">
                        { this.state.categories.map( (category, i) => {
                            // if(category.visible){
                                return <CategoryBox key={i} category={category} />
                            // }
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
