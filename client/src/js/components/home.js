import React from "react";

export default class Home extends React.Component {
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
                                <div className="home-search-block">
                                    <form id="home-search" className="home-search-form" action="">
                                        <div className="form-input-box">
                                            <div className="form-label">
                                                <label htmlFor="search-locataion">Location</label>
                                            </div>
                                            <div className="form-element">
                                                <input id="search-location" type="text" name="location" value="" placeholder="e.g.Sydney" />
                                            </div>
                                        </div>
                                        <div className="form-input-box">
                                            <div className="form-label">
                                                <label htmlFor="search-cat">Occasion</label>
                                            </div>
                                            <div className="form-element">
                                                <input id="search-cat" type="text" name="cat" value="" placeholder="e.g.Hens" />
                                            </div>
                                        </div>
                                        <div className="form-submit-box">
                                            <input type="submit" value="Search"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}