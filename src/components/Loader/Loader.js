import React from 'react';
import Lottie from "lottie-react";
import cryptoLoader from '../../lottie/crypto-loader.json';
import './Loader.scss';

const lottieCryptoLoaderOptions = {
    animationData: cryptoLoader,
    autoplay: true,
    loop: true,
    style: {
        width: "500px",
    }
}

export const Loader = () => {
    return (
        <div className="loader">
            <Lottie {...lottieCryptoLoaderOptions}/>
        </div>
    )
}
