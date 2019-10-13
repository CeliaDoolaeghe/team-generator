import React, { Fragment, useState } from 'react';
import PlayersList from './components/PlayersList';
import { generateTeams } from './utils/generate-teams';
import './stylesheets/team-generator.css';
import players from './data/players';
import NumberInput from './components/NumberInput';
import { checkNumber } from './utils/checks';
import LevelSelect from './components/LevelSelect';

const EMPTY_TEAMS = {
  team1: null,
  team2: null,
};

const App = () => {
  const [teams, setTeams] = useState(EMPTY_TEAMS);
  const [number, setNumber] = useState(1);
  const [level, setLevel] = useState(undefined);

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
        <div>
          <NumberInput
            value={number}
            onChange={value => setNumber(value)}
            isValid={checkNumber(number)}
          />
        </div>
        <div>
          <LevelSelect onChange={value => setLevel(value)}/>
        </div>
      </div>
      <div className='column buttons'>
        <button className='clear' onClick={() => setTeams(EMPTY_TEAMS)}>
          Clear
        </button>
        <button
          onClick={() => setTeams(generateTeams(players, number, level))}
          disabled={!checkNumber(number)}
        >
          Generate teams
        </button>
      </div>
    </Fragment>
  );
};

export default App;
