import React, { useEffect, useState } from 'react';
import { createContext } from "react";

export const CryptoContext = createContext([]);

export const CryptoContextProvider = ({children}) => {

    const [coins, setCoins] = useState([]);
    const [filteredCoins, setFilteredCoins] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);

    const getDataFromAPI = async () =>{
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=120&page=1');
        const data = await response.json();
        return data;
    }

    useEffect(()=>{
        setLoading(true);
        getDataFromAPI()
            .then(data => {
                setCoins(data)
                setLoading(false)
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(()=>{
        setInputValue(inputValue);
        setFilteredCoins(coins.filter((coin) => 
            coin.name.toLowerCase().includes(inputValue.toLowerCase()) 
            || coin.symbol.toLowerCase().includes(inputValue.toLowerCase())
        ));
    }, [coins, inputValue]);

    return (
        <CryptoContext.Provider value={{filteredCoins, inputValue, setInputValue, loading, setLoading}}>
            {children}
        </CryptoContext.Provider>
    )
}

