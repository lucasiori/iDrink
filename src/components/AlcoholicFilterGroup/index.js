import React, { useState } from 'react';

import { Container, FilterTag } from './styles';

function AlcoholicFilterGroup() {
  const [selectedFilter, setSelectedFilter] = useState('');

  function handleSelectedFilterTag(value) {
    if (selectedFilter === value) {
      setSelectedFilter('');
    } else {
      setSelectedFilter(value);
    }
  }

  return (
    <Container>
      <FilterTag
        selected={selectedFilter === 'alcoholic'}
        onClick={() => {
          handleSelectedFilterTag('alcoholic');
        }}
      >
        alcoholic
      </FilterTag>

      <FilterTag
        selected={selectedFilter === 'no alcoholic'}
        onClick={() => {
          handleSelectedFilterTag('no alcoholic');
        }}
      >
        no alcoholic
      </FilterTag>
    </Container>
  );
}

export default AlcoholicFilterGroup;
