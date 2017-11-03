import React from 'react';
import { connect } from "react-redux";
import ReactAutocomplete from "react-autocomplete";
import { updateSearchCategory } from "../actions/HeaderAction";

class FooterContact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isSent: false,
            step: 1
        }
    }

    handleClick(e, step){
        e.preventDefault();
        this.setState({
            ...this.state,
            step: step
        })
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render(){
        return(
            <div id="FooterContact" className="home-section">
                <div className="site-inner">
                <form action="">
                    <div id="step1" className={ this.state.step==1 ? "fc-section show": "fc-section"}>
                        <div className="fc-content">
                            I need help organiszing a 
                            <div className="rac-wrapper">
                                <ReactAutocomplete id="search-cat" inputProps={{ placeholder: 'Party/ event'  }}
                                    wrapperStyle={{
                                        display: 'block',
                                        position: 'relative'
                                    }}
                                    items={ this.props.header.categoryList }
                                    getItemValue={item => item.name}
                                    menuStyle={{
                                        position: 'absolute',
                                        top: 'auto',
                                        bottom: '40px',
                                        left: '0px',
                                        background: '#fff',
                                        overflow: 'auto',
                                        maxHeight: '400px',
                                        minWidth: '300px'
                                    }}
                                        renderItem={(item, highlighted) =>
                                        <div
                                            key={item.id}
                                            style={{ 
                                                backgroundColor: highlighted ? '#ffba03' : 'transparent',
                                                fontSize: '18px',
                                                padding: '10px',
                                                textAlign: 'left'
                                            }}
                                        >
                                            {item.name}
                                        </div>
                                        }
                                        value={ this.props.header.searchCategory }
                                        onChange={(e) => {
                                            this.props.loadParam(this.props.header.searchLocation, e.target.value);
                                        }}
                                        onSelect={(value) => {
                                            this.props.loadParam(this.props.header.searchLocation, value)
                                        }}
                                    />
                            </div>
                        </div>
                        <div className="fc-cta">
                            <a href="#go2" className="btn" onClick={ (e) => this.handleClick(e, 2) }>Next</a>
                        </div>
                    </div>
                    <div id="step2" className={ this.state.step==2 ? "fc-section show": "fc-section"}>
                        <div className="fc-content">
                            You can reach me via 
                            <div className="rac-wrapper">
                                <input type="text" name="fc-email" placeholder="email"/>
                            </div>
                            or
                            <div className="rac-wrapper">
                                <input type="text" name="fc-phone" placeholder="call"/>
                            </div>.
                        </div>
                        <div className="fc-cta">
                            <a href="#go3" className="btn" onClick={ (e) => this.handleClick(e, 3) }>Next</a>
                        </div>
                    </div>
                    <div id="step3" className={ this.state.step==3 ? "fc-section show": "fc-section"}>
                        <div className="fc-content">
                            <div className="rac-wrapper">
                               <input type="text" name="message" placeholder="Tell us more"/>
                            </div>
                        </div>
                        <div className="fc-cta">
                            <a href="#" className="btn" onClick={ (e) => this.handleSubmit(e) }>Submit</a>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        header: state.HeaderReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadParam: (location, category) => {
            dispatch(updateSearchCategory(location, category))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterContact)