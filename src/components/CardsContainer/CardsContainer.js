import React, { useContext } from 'react';
import { CryptoContext } from '../../context/CryptoContext';
import { Card } from '../Card/Card';
import './CardsContainer.scss';

export const CardsContainer = () => {

    const {filteredCoins} = useContext(CryptoContext);
    
    return (
        <div className="cardsContainer animate__animated animate__fadeIn">
            <ul>{filteredCoins.map(coin => <Card key={coin.id} crypto={coin}/>)}</ul>
        </div>
    )
}
