import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GoTriangleRight } from 'react-icons/go';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import api from '../../services/api';

import colors from '../../utils/colors';
import logo from '../../assets/logo.svg';

import {
  Container,
  MobileMenuButton,
  Content,
  CategoryListItem,
} from './styles';

function SidebarMenu({ onSelect }) {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filterTimeout, setFilterTimeout] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('list.php', {
        params: {
          c: 'list',
        },
      });

      setCategories(response.data.drinks);
      setFilteredCategories(response.data.drinks);
      setSelectedCategory(response.data.drinks[0].strCategory);
    }

    loadCategories();
  }, []);

  useEffect(() => {
    onSelect(selectedCategory);
  }, [selectedCategory, onSelect]);

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
    <Container hidden={!mobileMenuOpen}>
      <MobileMenuButton
        onClick={() => {
          setMobileMenuOpen(!mobileMenuOpen);
        }}
      >
        {mobileMenuOpen ? (
          <MdClose color="#fff" size={30} />
        ) : (
          <GiHamburgerMenu color="#fff" size={30} />
        )}
      </MobileMenuButton>

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

SidebarMenu.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default SidebarMenu;
