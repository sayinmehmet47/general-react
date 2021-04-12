import './App.css';
import React, { useState } from 'react';

function App(props) {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');

  function greeting() {
    setCount(count + 1);
  }

  function waveHello() {
    setColor('blue');
  }

  return (
    <div className="App">
      <h1 id="child" onClick={() => props.onTrigger('red')}>
        Bilgi
      </h1>
      <button
        onClick={() => {
          greeting();
          waveHello();
        }}
      >
        tikla gor
      </button>
      <h3 style={{ color: color }}>sayi {count}</h3>
    </div>
  );
}

export default App;
