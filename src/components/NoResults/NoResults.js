import React from 'react';
import Lottie from "lottie-react";
import noResults from '../../lottie/no-results.json';
import './NoResults.scss';

const lottieNoResultsOptions = {
    animationData: noResults,
    autoplay: true,
    loop: true,
    style: {
        width: "500px",
    }
}

export const NoResults = () => {
    return (
        <div className="no-results">
            <Lottie {...lottieNoResultsOptions}/>
        </div>
    )
}
