import React from 'react';

export default class SocialStrip extends React.Component{
    constructor(){
        super();
        this.state={
            isLoading: true
        }
    }

    componentDidMount(){

    }

    render(){
        return (
            <div className="SocialStrip home-section">
                <div className="site-inner">
                    <h3 className="section-title">Trending via #ozpartyevents</h3>
                    <div className="SocialStrip-inner">
                       
                    </div>
                </div>
            </div>
        );
    }
}