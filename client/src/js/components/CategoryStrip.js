import React from "react";
import { Link } from "react-router-dom";
import { routeCodes } from "../routes";
import axios from "axios";
import { CategoryBox } from "./CategoryBox";
import { connect } from "react-redux";
import BuildOwn from "../../img/buildown.png";
import scrollToElement from 'scroll-to-element';

class CategoryStrip extends React.Component {
    constructor(props){
        super(props);
    }

    scrollToForm(e){
        e.preventDefault();
        scrollToElement('#FooterContact', {
            offset: 0,
            duration: 1000
        });
    }

    render() {
        const homeCategory = (this.props.categories != null)? this.props.categories.slice(0,11): [];
        return (
            <div className="category-strip">
                <div className="site-inner">
                    <h3 className="section-title">We can help if you are looking for...</h3>
                    <div className="category-block">
                        { homeCategory.map( (category, i) => {
                            return <CategoryBox key={i} category={category} />
                        })}
                        <div className="category-box yourown">
                            <Link to={ "/buildyourown" }>
                                <div className="category-box-inner">
                                    <img src={ BuildOwn } alt="Build your own"/>
                                    <div className="category-box-name">Build your own</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="cta-block">
                        <a href="#" className="btn-2" onClick={ (e) => this.scrollToForm(e) }>Enquire Now</a>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        categories: state.HeaderReducer.categoryList
    }
}

export default connect(mapStateToProps)(CategoryStrip)