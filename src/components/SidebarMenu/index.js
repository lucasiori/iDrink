import React, { useState, useEffect } from 'react';
import { GoTriangleRight } from 'react-icons/go';
import api from '../../services/api';

import colors from '../../utils/colors';
import logo from '../../assets/logo.svg';

import { Container, Content, CategoryListItem } from './styles';

function SidebarMenu() {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filterTimeout, setFilterTimeout] = useState(null);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('/list.php', {
        params: {
          c: 'list',
        },
      });

      setCategories(response.data.drinks);
      setFilteredCategories(response.data.drinks);
    }

    loadCategories();
  }, []);

  function handleFilterCategories(event) {
    const { value } = event.target;

    if (filterTimeout) {
      clearTimeout(filterTimeout);
      setFilterTimeout(null);
    }

    setFilterTimeout(
      setTimeout(() => {
        setFilteredCategories(
          categories.filter((category) =>
            category.strCategory.toLowerCase().includes(value.toLowerCase())
          )
        );
      }, 700)
    );
  }

  return (
    <Container>
      <img src={logo} alt="iDrink" width={100} />

      <Content>
        <header>
          <h2>categories</h2>
        </header>

        <div>
          <input
            type="text"
            placeholder="filter by name"
            onChange={handleFilterCategories}
          />

          <ul>
            {filteredCategories.map(({ strCategory }) => (
              <CategoryListItem
                key={strCategory}
                selected={selectedCategory === strCategory}
                onClick={() => {
                  setSelectedCategory(strCategory);
                }}
              >
                {selectedCategory === strCategory && (
                  <GoTriangleRight color={colors.primaryColor} size={20} />
                )}
                {strCategory}
              </CategoryListItem>
            ))}
          </ul>
        </div>
      </Content>
    </Container>
  );
}

export default SidebarMenu;
