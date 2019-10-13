import React, { Fragment } from 'react';

export default ({ onChange, isValid }) => (
  <Fragment>
    <label>
      Number of players:
      <input id="number" onChange={e => onChange(e.target.value)}/>
    </label>
    {!isValid && <span className="error">Please enter a valid number</span>}
  </Fragment>
);
