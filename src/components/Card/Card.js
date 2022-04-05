import React from 'react';
import './Card.scss';

export const Card = ({crypto}) => {
    return (
        <li className="card" key={crypto.id}>
            <div className="dataAndPrice">
                <div className="data">
                    <figure className="data__logo">
                        <img src={crypto.image} alt={`${crypto.name} Logo`}></img>
                    </figure>
                    <div className="data__data">
                        <p className="data__data-name">{crypto.name}</p>
                        <p className="data__data-ticker">{crypto.symbol.toUpperCase()}</p>
                    </div>
                </div>
                <div className="price">
                    <div className="price__price">
                        <p>${crypto.current_price.toLocaleString()}</p>
                    </div>
                    <div className="price__percentageChange">
                        <p className="low24">Low 24: <span>${crypto.low_24h.toLocaleString()}</span></p>
                        <p className="high24">High 24: <span>${crypto.high_24h.toLocaleString()}</span></p>
                    </div>
                </div>
            </div>
            <div className="athAndPercentageChange">
                <div className="athAndMC">
                    <p className="athAndMC__ath">ATH: <span>${crypto.ath.toLocaleString()}</span></p>
                    <p className="athAndMC__change">ATH Change: <span>{crypto.ath_change_percentage.toFixed(2).toString().replace(".", ",")}%</span></p>
                    <p className="athAndMC__mc">Mk. Cap: <span>${crypto.market_cap.toLocaleString()}</span></p>
                </div>
                <div className="percentageChange">
                        {(crypto.price_change_percentage_24h < 0) 
                            ? 
                            <p className="down">
                                <span>▼</span>
                                {crypto.price_change_percentage_24h.toFixed(2).toString().replace(".", ",")}%
                            </p>
                            : 
                            <p className="up">
                                <span>▲</span>
                                {crypto.price_change_percentage_24h.toFixed(2).toString().replace(".", ",")}%
                            </p>
                        }
                </div>
            </div>
        </li>
    )
}
