import React from "react";
import ReactAutocomplete from "react-autocomplete";
import HomeSearchForm from "../components/HomeSearchForm";
import CategoryStrip from "../components/CategoryStrip";
import ReviewStrip from "../components/ReviewStrip";
import WhyChooseUs from "../components//WhyChooseUs";
import HomeParnterImg from "../../img/home-partners.png";
import PopularPackages from "../components/PopularPackages";
import HomeBlog from "../components/HomeBlog";
import SocialStrip from "../components/SocialStrip";
import FooterContact from "../components/FooterContact";

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isLoading: true,

        };
    }
    render() {
        return (
            <div id="home-page">
                <WhyChooseUs/>
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
                <CategoryStrip/>
                {<ReviewStrip/>}
                <div className="home-partners home-section">
                    <div className="site-inner">
                        <h3 className="section-title">Snapshot of Our Partners</h3>
                        <img src={HomeParnterImg} alt="Our partners"/>    
                    </div>
                </div>
                <PopularPackages/>
                <HomeBlog/>
                <SocialStrip/>
                <FooterContact/>
            </div>
        );
    }
}