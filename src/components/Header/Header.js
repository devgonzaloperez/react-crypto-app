import React, { useContext } from 'react';
import 'animate.css';
import { CryptoContext } from '../../context/CryptoContext';
import logo from '../../assets/logoGP_blue.png';
import './Header.scss';

export const Header = () => {

    const {inputValue, setInputValue} = useContext(CryptoContext);

    const handleInputChange = (event) =>{
        event.preventDefault();
        setInputValue(event.target.value)
    }

    return (
        <div className="header">
                <figure className="header__logo">
                    <img src={logo} alt='Logo'/>
                </figure>
                <div className="header__input animate__animated animate__fadeInRightBig">
                    <input type="text" placeholder="Find a coin by name or ticker!" value={inputValue} spellCheck="false" onChange={handleInputChange}></input>
                </div>
        </div>
    )
}
