import './App.scss';
import { CryptoContextProvider } from './context/CryptoContext';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

export const App = () => {

    return(
        <>
            <CryptoContextProvider>
                <Header/>
                <Main/>
            </CryptoContextProvider>
        </>
    )
}
