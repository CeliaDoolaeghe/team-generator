import React from 'react';
import './App.css';
import sportsmen from './data/sportsmen';
import SportsmenList from './components/SportsmenList';

function App() {
  return (
    <div className="App">
      <h1>Team Generator</h1>
      <div>
        <SportsmenList sportsmen={sportsmen}/>
      </div>
    </div>
  );
}

export default App;
