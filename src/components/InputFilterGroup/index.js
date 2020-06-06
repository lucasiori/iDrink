import React from 'react';

import { Container } from './styles';

function InputFilterGroup() {
  return (
    <Container>
      <div>
        <span>filter by</span>
        <select name="filter_by" id="filter_by">
          <option value="name">name</option>
          <option value="ingredient">ingredient</option>
        </select>
      </div>

      <div>
        <input type="text" name="filter" placeholder="filter drinks" />
      </div>
    </Container>
  );
}

export default InputFilterGroup;
