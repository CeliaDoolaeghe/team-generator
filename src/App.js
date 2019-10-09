import React, { Component } from 'react';
import './stylesheets/team-generator.css';
import sportsmen from './data/players';
import SportsmenList from './components/PlayersList';
import { generateTeams } from './utils/generate-teams';

const EMPTY_TEAMS = {
  team1: null,
  team2: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: EMPTY_TEAMS,
    };
  };

  render() {
    return (
      <div>
        <h1>Team Generator</h1>
        <div className="column">
          <SportsmenList sportsmen={sportsmen}/>
        </div>
        <div className="column">
          {this.state.teams.team1 && <SportsmenList sportsmen={this.state.teams.team1}/>}
          {this.state.teams.team2 && <SportsmenList sportsmen={this.state.teams.team2}/>}
        </div>
        <div>
          <button onClick={() => this.setState({ teams: EMPTY_TEAMS })}>
            Clear
          </button>
          <button onClick={() => this.setState({ teams: generateTeams(sportsmen) })}>
            Generate teams
          </button>
        </div>
      </div>
    );
  };
}

export default App;
