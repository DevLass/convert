import React, { useState } from "react";
import { AiOutlineSync } from "react-icons/ai";


//Styles
import "./Converter.css";

//Components


export default (props) => {
    const [coin, setCoin] = useState(1);
    const [convertedUSD, setConvertedUSD] = useState("");
    const [convertedEUR, setConvertedEUR] = useState("");
    const [convertedBTC, setConvertedBTC] = useState("");

    const handleChange = (e) => {
        setCoin(e.target.value);
    };

    const handleSearch = () => {
        fetch(
            `http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL`
        )
            .then((response) => {
                if (response.status == 200) {
                    return response.json();
                }
            })
            .then((data) => {
                // setDataVar(data)
                calculator(data)
            });
    };

    const calculator = (data) => {
        setConvertedUSD(coin * data.USDBRL.ask);
        setConvertedEUR(coin * data.EURBRL.ask);
        setConvertedBTC(coin * data.BTCBRL.ask);
    };

    return (
        <>
            <div className="container">
                <h2>
                    BRL OVERALL
                </h2>
                <small>New rates every 30 seconds, click reload to fetch</small>
                <div className="flex">
                    <input type="number" value={coin} onChange={handleChange} onFocus />    
                    <button onClick={handleSearch()}><AiOutlineSync/></button>
                </div>
                <p>USD</p>
                <h3>{Number(convertedUSD).toFixed(3)}</h3>
                <p>EUR</p>
                <h3>{Number(convertedEUR).toFixed(3)}</h3>
                <p>BTC</p>
                <h3>{Number(convertedBTC).toFixed(3)}</h3>
            </div>
        </>
    );
};
