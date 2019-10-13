import React from 'react';

const playerIcon = require('../assets/contact.png');

export default ({ name, level }) => (
  <div className="player">
    <img className={`icon-${level}`} src={playerIcon} alt={level} height='40px' width='40px'/>
    <p className="player-name">{name}</p>
  </div>
);
