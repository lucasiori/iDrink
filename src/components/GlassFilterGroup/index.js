import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, FilterTag } from './styles';

function GlassFilterGroup() {
  const [glassesTypes, setGlassesTypes] = useState([]);
  const [selectedItemsFilter, setSelectedItemsFilter] = useState([]);

  useEffect(() => {
    async function loadGlassesTypes() {
      const response = await api.get('/list.php', {
        params: {
          g: 'list',
        },
      });

      setGlassesTypes(response.data.drinks);
    }

    loadGlassesTypes();
  }, []);

  function handleChangeFilterTag(value) {
    if (selectedItemsFilter.includes(value)) {
      setSelectedItemsFilter(
        selectedItemsFilter.filter((item) => item !== value)
      );
    } else {
      setSelectedItemsFilter([...selectedItemsFilter, value]);
    }
  }

  return (
    <Container>
      {glassesTypes
        .filter(({ strGlass }) => strGlass !== '')
        .map(({ strGlass }) => (
          <FilterTag
            key={strGlass}
            selected={selectedItemsFilter.includes(strGlass)}
            onClick={() => {
              handleChangeFilterTag(strGlass);
            }}
          >
            {strGlass}
          </FilterTag>
        ))}
    </Container>
  );
}

export default GlassFilterGroup;
