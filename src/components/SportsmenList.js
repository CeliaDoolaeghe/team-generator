import React from 'react';
import Sportsman from './Sportsman';

export default ({ sportsmen }) => {
  return (
    <div className='team'>
      {sportsmen.map((sportsman, index) => (
        <Sportsman key={index} name={sportsman.name} level={sportsman.level}/>
      ))}
    </div>);
};
