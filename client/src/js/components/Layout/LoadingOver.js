import React from 'react';

const LoadingOver = (props) => {
    return(
        <div className={ props.loading? "loading-overlay hide" : "loading-overlay"}></div>
    )
};

export default LoadingOver;