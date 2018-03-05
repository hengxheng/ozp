import React from 'react';
import { connect } from "react-redux";
import ReactAutocomplete from "react-autocomplete";
import { loadSearchCategory,  updateSearchCategory } from "../../actions/HeaderAction";

class HeaderSearchForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div id="header-search">
            <form id="header-search-form" action="">
                <div className="search-box-1">
                    <ReactAutocomplete id="header-search-location" inputProps={{ placeholder: 'e.g.Sydney'  }}
                        wrapperStyle={{display: 'block'}}
                            items={[
                                { id: 'sydney', label: 'Sydney' },
                                { id: 'melbourne', label: 'Melbourne' }
                            ]}
                            getItemValue={item => item.label}
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
                                {item.label}
                            </div>
                            }
                            value={ this.props.header.searchLocation }
                            onChange={ (e) => {
                                this.props.loadParam(e.target.value, this.props.header.searchCategory);
                            }}
                            onSelect={ (value) => {
                                this.props.loadParam(value, this.props.header.searchCategory)
                            }}
                    />
                </div>
                <div className="search-box-2">
                    <ReactAutocomplete id="header-search-category" inputProps={{ placeholder: 'e.g.Hens night'  }}
                        wrapperStyle={{display: 'block'}}
                            items={ this.props.header.categoryList }
                            getItemValue={item => item.name}
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
                <div className="search-box-3">
                    <input type="submit" value="Search"/>
                </div>
            </form>
        </div>     
        );   
    }
}

const mapStateToProps = (state) => {
    return {
        header: state.HeaderReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCategories: (categories) =>{
            dispatch(loadSearchCategory(categories))
        },
        loadParam: (location, category) => {
            dispatch(updateSearchCategory(location, category))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearchForm)