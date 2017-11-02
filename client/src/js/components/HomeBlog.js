import React from 'react';
import BlogBox from './BlogBox';

export default class HomeBlog extends React.Component{
    constructor(){
        super();
        this.state={
            blogs:[]
        }
    }

    componentDidMount(){
        let _blogs = [
            {
                name: "Why A Cruise Event Should Be On Your Sydney Bucket List",
                cat: "Blog",
                image: ""
            },
            {
                name: "10 Amazing School Formal Venues In Sydney",
                cat: "Blog",
                image: ""
            },
        ];

        this.setState({
            blogs: _blogs
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