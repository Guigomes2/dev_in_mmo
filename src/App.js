import './App.css';
import Inputs from './componets/Inputs';
import React, { useEffect, useState } from 'react';

function App() {
  const { text, setName } = useState("");

  // useEffect(() => {
  // if (text) {
  // fetch('')
  // .then(res => res.json())
  // }
  //}, [text]);


  return (
    <>
      <form>
        <input
          placeholder="O que você procura?"
          type="text"
          value={text}
          onChange={setName}
        />

        <button onClick="">Procurar</button>

      </form>
    </>
  );
}
export default App;
