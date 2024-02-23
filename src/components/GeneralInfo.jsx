import { useState } from "react";

import Icon from '@mdi/react';
import { mdiSquareEditOutline } from '@mdi/js';


function GeneralInfo() {
    return(
        <>
            <h1>Lebenslauf <Info name="Name" type="text"/> </h1>         
            <Info name="Email" type="email"/>
            <Info name="Telefon" type="tel"/>
        </>
    )
}

function Info(props) {
    const [showInput, setInput] = useState(false);
    const [inputText, setText] = useState(props.name);

    function handleButtonClick() {
        setInput(!showInput);
    }

    function handleInput(e) {
        setText(e.target.value);
    }

    return (
        <>
            <label htmlFor={props.name}>{inputText}</label>
            {showInput ? 
                <input 
                    type={props.type}
                    id={props.name}
                    onChange={handleInput}
                    defaultValue={inputText}
                /> : <></>}
            <button
                type="button" 
                id={props.name}
                onClick={handleButtonClick}
            >
                <Icon path={mdiSquareEditOutline} size={1} />
            </button>
        </>
    )
}

export default GeneralInfo;