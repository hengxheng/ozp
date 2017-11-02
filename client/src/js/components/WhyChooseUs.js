import React from 'react';
import date_change from '../../img/date_change.png';
import event_planning from '../../img/event_planning.png';
import payment from '../../img/payment.png';
import arrowIcon from '../../img/left_small.png';

export default class WhyChooseUs extends React.Component {
    constructor(){
        super();
        this.state={
            opened: ""
        }
    }

    handleClick(){
        let opened = "";
        if(this.state.opened == ""){
            opened = "opened";
        }

        this.setState({
            opened: opened
        });
    }

    render(){
        return (
            <div id="WhyChooseUs" onClick={ ()=> this.handleClick() } className={ this.state.opened }>
                <div className="wcu-title">
                    <h2>WHY CHOOSE US <img src={ arrowIcon } alt=""/></h2>
                </div>
                <div className="wcu-content">
                    <div className="wcu-box">
                        <img src={ date_change } alt="Free + Flexible date changes"/>
                        <h3>Free + Flexible date changes</h3>
                    </div>
                    <div className="wcu-box">
                        <img src={ payment } alt="Book with no upfront payment"/>
                        <h3>Book with no upfront payment</h3>
                    </div>
                    <div className="wcu-box">
                        <img src={ event_planning } alt="Free event planning advice"/>
                        <h3>Free event planning advice</h3>
                    </div>
                </div>
            </div>
        )
    }
}