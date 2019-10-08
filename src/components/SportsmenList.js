import React from 'react';
import Sportsman from './Sportsman';

export default ({ sportsmen }) => {
  return sportsmen.map(sportsman => (
    <Sportsman name={sportsman.name} level={sportsman.level}/>
  ));
};
