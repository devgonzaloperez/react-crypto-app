import {React, useContext} from 'react';
import { CryptoContext } from '../../context/CryptoContext';
import { CardsContainer } from '../CardsContainer/CardsContainer';
import { Loader } from '../Loader/Loader';
import { NoResults } from '../NoResults/NoResults';
import './Main.scss';

export const Main = () => {

    const {filteredCoins, loading} = useContext(CryptoContext);

    return (
        <main>
            {
                (loading === true) 
                ? <Loader/>
                : (filteredCoins.length === 0)
                    ? <NoResults/>
                    : <CardsContainer/>
            }
        </main>
    )
}
