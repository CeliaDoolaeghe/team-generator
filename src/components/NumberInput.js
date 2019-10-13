import React, { Fragment } from 'react';

export default ({ onChange }) => (
  <Fragment>
    <label>Number of players:</label>
    <input id="number" onChange={e => onChange(e.target.value)}/>
  </Fragment>
);
