import React from 'react';
import axios from "axios";
import { connect } from "react-redux";
import ReactAutocomplete from "react-autocomplete";
import { updateSearchCategory } from "../../actions/HeaderAction";

const HomeSearchForm = (props) => {
    return (
        <div className="home-search-block">
        <form id="home-search" className="home-search-form" action="">
            <div className="form-input-box">
                <div className="form-label">
                    <label htmlFor="search-locataion">Location</label>
                </div>
                <div className="form-element">
                <ReactAutocomplete id="search-location" inputProps={{ placeholder: 'e.g.Sydney'  }}
                    wrapperStyle={{
                        display: 'block',
                        position: 'relative'
                    }}
                    items={[
                        { id: 'sydney', label: 'Sydney' },
                        { id: 'melbourne', label: 'Melbourne' }
                    ]}
                    getItemValue={item => item.label}
                    menuStyle={{
                        position: 'absolute',
                        top: '40px',
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
                        {item.label}
                    </div>
                    }
                    value={ props.header.searchLocation }
                    onChange={ (e) => {
                        props.loadParam(e.target.value, props.header.searchCategory);
                    }}
                    onSelect={ (value) => {
                        props.loadParam(value, props.header.searchCategory)
                    }}
            />
                </div>
            </div>
            <div className="form-input-box">
                <div className="form-label">
                    <label htmlFor="search-cat">Occasion</label>
                </div>
                <div className="form-element">
                <ReactAutocomplete id="search-cat" inputProps={{ placeholder: 'e.g.Hens night'  }}
                    wrapperStyle={{
                        display: 'block',
                        position: 'relative'
                    }}
                    items={ props.header.categoryList }
                    getItemValue={item => item.name}
                    menuStyle={{
                        position: 'absolute',
                        top: '40px',
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
                    value={ props.header.searchCategory }
                    onChange={(e) => {
                        props.loadParam(props.header.searchLocation, e.target.value);
                    }}
                    onSelect={(value) => {
                        props.loadParam(props.header.searchLocation, value)
                    }}
                    />
                </div>
            </div>
            <div className="form-submit-box">
                <input type="submit" value="Search"/>
            </div>
        </form>
    </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeSearchForm)