import React from 'react';

export default ({ onChange }) => (
  <select defaultValue="beginner" onChange={e => onChange(e.target.value)}>
    <option value="beginner">Beginner</option>
    <option value="expert">Expert</option>
  </select>
);
