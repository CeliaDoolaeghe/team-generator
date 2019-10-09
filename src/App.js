import React, { Fragment, useState } from 'react';
import PlayersList from './components/PlayersList';
import { generateTeams } from './utils/generate-teams';
import './stylesheets/team-generator.css';
import players from './data/players';

const EMPTY_TEAMS = {
  team1: null,
  team2: null,
};

const App = () => {
  const [teams, setTeams] = useState(EMPTY_TEAMS);

  return (
    <Fragment>
      <h1>Team Generator</h1>
      <div className="column">
        <PlayersList players={players}/>
      </div>
      <div className="column">
        {teams.team1 && <PlayersList players={teams.team1}/>}
        {teams.team2 && <PlayersList players={teams.team2}/>}
      </div>
      <div>
        <button onClick={() => setTeams(EMPTY_TEAMS)}>
          Clear
        </button>
        <button onClick={() => setTeams(generateTeams(players))}>
          Generate teams
        </button>
      </div>
    </Fragment>
  );
};

export default App;
