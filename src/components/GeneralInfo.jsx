import { useState } from 'react';

import Icon from '@mdi/react';
import { mdiSquareEditOutline } from '@mdi/js';

function GeneralInfo() {
  return (
    <>
      <h1>
        Lebenslauf
        <Info name="Name" type="text" />
      </h1>
      <Info name="Email" type="email" />
      <Info name="Telefon" type="tel" />
    </>
  );
}

function Info({ name, type }) {
  const [showInput, setInput] = useState(false);
  const [inputText, setText] = useState(name);

  function handleButtonClick() {
    setInput(!showInput);
  }

  function handleInput(e) {
    setText(e.target.value);
  }

  return (
    <>
      <label htmlFor={name}>{inputText}</label>
      {showInput
        ? (
          <input
            type={type}
            id={name}
            onChange={handleInput}
            defaultValue={inputText}
          />
        ) : null}
      <button
        type="button"
        id={name}
        onClick={handleButtonClick}
        aria-label="show input"
      >
        <Icon path={mdiSquareEditOutline} size={1} />
      </button>
    </>
  );
}

export default GeneralInfo;
