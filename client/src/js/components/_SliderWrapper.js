import React from "react";

export default class SliderWrapper extends React.Component{
    constructor(){
        super();
    }

    // componentDidMount(){
    //     console.log(React.Children.key);
    //     console.log(React.Children.count(this.props.children))
    // }
    createCtrlHTML(){
        var controlHTML = "";
        const n = React.Children.count(this.props.children);
        if(n>0){
            controlHTML = '<ul>';
            for(let i=0; i<n; i++){
                controlHTML += '<li className="nav-dot"><a href="#hz-'+n+'"></a></li>';
            }
            controlHTML += '</ul>';
        }
        return { __html: controlHTML }
    }

    render(){
        return (
            <div className="hz-rc-slider" id={this.props.sliderID}>
                <div className="hz-rc-sliderInner">
                    {  React.Children.map(this.props.children, child => {
                        return (
                            <div className="hr-rc-slider-item" id={ "hz-"+child.key} >
                                { child }
                            </div>
                        )
                    }) }
                </div>
                <div className="hz-rc-sliderCtrl" dangerouslySetInnerHTML={ this.createCtrlHTML() } />
            </div>
        );
    }
}