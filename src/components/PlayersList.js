import React from 'react';
import Sportsman from './Player';

export default ({ players }) => {
  return (
    <div className='team'>
      {players.map((player, index) => (
        <Sportsman key={index} name={player.name} level={player.level}/>
      ))}
    </div>);
};
