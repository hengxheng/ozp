import React from 'react';
import BlogBox from './BlogBox';
import config from '../config';
import axios from "axios";

export default class HomeBlog extends React.Component{
    constructor(props){
        super(props);
        this.state={
            blogs:[]
        }
        console.log(config.drupal_url);
    }

    componentDidMount(){

        axios.get(`/api/homeblog`)
        .then(res => {
            this.setState({
                blogs: res.data
            });
        });        
    }
    
    render(){
        return(
            <div className="BlogStrip home-section">
                <div className="site-inner">
                    <h3 className="section-title">Quality news, stories, advice, hints and tips on planning parties and events experiences.</h3>
                    <div className="BlogStrip-inner">
                        {
                            this.state.blogs.map( (i, key) => {
                                return <BlogBox key={key} blog={i} />
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}