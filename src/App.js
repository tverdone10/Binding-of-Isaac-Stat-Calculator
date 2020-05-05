import React from 'react';
import isaac from './images/isaachead.png';
import './App.css';
import CharacterScreen from './components/CharacterScreen'

function App() {
  return (
    <div className="App">

      <div className="stats" >
      <CharacterScreen />
      </div>
  
    </div>
  );
}

export default App;
