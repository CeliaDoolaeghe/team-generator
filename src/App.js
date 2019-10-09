import React, { Component } from 'react';
import './stylesheets/team-generator.css';
import sportsmen from './data/sportsmen';
import SportsmenList from './components/SportsmenList';
import { generateTeams } from './utils/generate-teams';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: {
        team1: null,
        team2: null,
      }
    };
  };

  render() {
    return (
      <div>
        <h1>Team Generator</h1>
        <div className="column">
          <SportsmenList sportsmen={sportsmen}/>
          <button onClick={() => {
            this.setState({ teams: generateTeams(sportsmen) });
          }}>
            Generate teams
          </button>
        </div>
        <div className="column">
          {this.state.teams.team1 && <SportsmenList sportsmen={this.state.teams.team1}/>}
          {this.state.teams.team2 && <SportsmenList sportsmen={this.state.teams.team2}/>}
        </div>
      </div>
    );
  };
}

export default App;
