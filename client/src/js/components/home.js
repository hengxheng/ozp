import React from "react";
import ReactAutocomplete from "react-autocomplete";
import HomeSearchForm from "./sections/HomeSearchForm";

export default class Home extends React.Component {
    constructor(){
        super();
        this.state={
            isLoading: true,

        };
    }
    render() {
        return (
            <div id="home-page">
                <div className="home-banner">
                    <div className="home-banner-wrapper">
                        <div className="site-inner">   
                            <div className="home-hanner-inner">
                                <div className="home-banner-text">
                                    <h1>We help you organise<br/>hassle free <span className="cy">parties and events.</span></h1>
                                    <p>Have a look at the extensive list of expertly designed event packages, featuring the best venues, entertainment, activities and deals that are exclusive to our customers.</p>
                                </div>
                                <HomeSearchForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}