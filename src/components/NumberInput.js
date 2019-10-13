import React, { Fragment } from 'react';

export default ({ value, onChange, isValid }) => (
  <Fragment>
    <label>
      Number of players:
      <input type="number" defaultValue={value} onChange={e => onChange(parseInt(e.target.value))}/>
    </label>
    {!isValid && <span className="error">Please enter a valid number</span>}
  </Fragment>
);
