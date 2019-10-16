import React, { Fragment } from 'react';
import Sportsman from './Player';

export default ({ title, players }) => (
  <Fragment>
    <h2 className="team-title">{title}</h2>
    <div className='team'>
      {players && players.map((player, index) => (
        <Sportsman key={index} name={player.name} level={player.level}/>
      ))}
    </div>
  </Fragment>
);
