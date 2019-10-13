import React, { Fragment, useState } from 'react';
import PlayersList from './components/PlayersList';
import { generateTeams } from './utils/generate-teams';
import './stylesheets/team-generator.css';
import players from './data/players';
import NumberInput from './components/NumberInput';

const EMPTY_TEAMS = {
  team1: null,
  team2: null,
};

const App = () => {
  const [teams, setTeams] = useState(EMPTY_TEAMS);
  const [number, setNumber] = useState(0);

  return (
    <Fragment>
      <h1>Teams Generator</h1>
      <div className='column'>
        <PlayersList players={players}/>
      </div>
      <div className='column'>
        {teams.team1 && <PlayersList players={teams.team1}/>}
        {teams.team2 && <PlayersList players={teams.team2}/>}
      </div>
      <div>
        <NumberInput onChange={value => setNumber(value)}/>
      </div>
      <div className="column buttons">
        <button className="clear" onClick={() => setTeams(EMPTY_TEAMS)}>
          Clear
        </button>
        <button onClick={() => setTeams(generateTeams(players, number))}>
          Generate teams
        </button>
      </div>
    </Fragment>
  );
};

export default App;
