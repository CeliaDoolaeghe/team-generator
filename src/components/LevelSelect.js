import React from 'react';

export default ({ value, onChange }) => (
  <label>
    Level of teams:
    <select className='element-form select' defaultValue={value} onChange={e => onChange(e.target.value)}>
      <option value="beginner">Beginner</option>
      <option value="expert">Expert</option>
      <option value="balanced">Balanced</option>
    </select>
  </label>
);
