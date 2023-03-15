import React from 'react';

const TodoFilter = ({ value, onChange }) => (
  <label>
    Филтер по имени <input type="text" value={value} onChange={onChange} />
  </label>
);

export default TodoFilter;
