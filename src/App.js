import './App.css';
import Inputs from './componets/Inputs';
import React, { useEffect, useState } from 'react';

function App() {
  const {text, setName} = useState("");

  // useEffect(() => {
  // if (text) {
  // fetch('')
  // .then(res => res.json())
  // }
  //}, [text]);


  return (
    <label>O que você procura?   
      <input
        type="text"
        value={text}
        onChange={setName}
      />
    </label>
  );
}
export default App;
