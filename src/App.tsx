import React from 'react';
import logo from './logo.svg';

import img1 from './w1.jpg';
import img2 from './w2.jpg';
import img3 from './w3.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img1} className="App-logo" alt="logo" />
        <img src={img2} className="App-logo" alt="logo" />
        <img src={img3} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
