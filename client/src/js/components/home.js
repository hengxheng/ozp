import React from "react";

export default class Home extends React.Component {
    render() {
        return (
            <div id="home-page">
                <div className="home-header">
                    <h2>We help you organise hassle free <span class="cy">parties and events.</span></h2>
                    <p>Have a look at the extensive list of expertly designed event packages, featuring the best venues, entertainment, activities and deals that are exclusive to our customers.</p>
                    <div className="home-search-block">
                        <form id="home-search" action="">
                            <label>Location</label>
                            <input type="text" name="location" value="" placeholder="e.g.Sydney" />
                            <input type="text" name="party" value="" placeholder="e.g.Hens" />
                            <input type="submit" value="SEARCH"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}