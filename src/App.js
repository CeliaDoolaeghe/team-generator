import React, { Component } from 'react';
import './App.css';
import sportsmen from './data/sportsmen';
import SportsmenList from './components/SportsmenList';
import { generateTeams } from './utils/generate-teams';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: {
        team1: [],
        team2: [],
      }
    };
  };

  render() {
    return (
      <div className="App">
        <h1>Team Generator</h1>
        <div>
          <SportsmenList sportsmen={sportsmen}/>
          <button onClick={() => {
            this.setState({ teams: generateTeams(sportsmen) });
          }}>
            Generate teams
          </button>
        </div>
        <div>
          <SportsmenList sportsmen={this.state.teams.team1}/>
          <SportsmenList sportsmen={this.state.teams.team2}/>
        </div>
      </div>
    );
  };
}

export default App;
