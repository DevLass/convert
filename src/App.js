// Essential
import React, { useState } from "react";

//Styles
import "./App.css";

//Components
import Converter from "./components/Converter";

export default (props) => {

    return (
        <>
        <main>
            <Converter FirstCoin="USD" SecondCoin="BRL" />
        </main>
        </>
    );
};