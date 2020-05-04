import React from 'react';
import isaac from './images/isaachead.png';
import './App.css';
import TestHome from './components/testhome'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={isaac} className="App-logo" alt="logo" />
        <p>
          <TestHome />
        </p>
      </header>
    </div>
  );
}

export default App;
