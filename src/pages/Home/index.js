import React, { useState, useEffect } from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import api from '../../services/api';

import SidebarMenu from '../../components/SidebarMenu';
import FiltersGroup from '../../components/FiltersGroup';
import DrinkCard from '../../components/DrinkCard';
import DrinkDetails from '../../components/DrinkDetails';

import colors from '../../utils/colors';
import { Wrapper, Container, Filters, Drinks } from './styles';

function Home() {
  const [drinks, setDrinks] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [category, setCategory] = useState(null);
  const [filterType, setFilterType] = useState('name');
  const [filterValue, setFilterValue] = useState('');
  const [drinkDetails, setDrinkDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDriks() {
      const response = await api.get('/filter.php', {
        params: {
          c: category.replace(' ', '_'),
        },
      });

      setDrinks(response.data.drinks);
      setFilteredDrinks(response.data.drinks);
      setLoading(false);
    }

    if (category) {
      setLoading(true);
      setFilterValue('');

      loadDriks();
    }
  }, [category]);

  async function handleFilter() {
    setLoading(true);

    let response;

    if (filterValue) {
      if (filterType === 'name') {
        response = await api.get('search.php', {
          params: {
            s: filterValue,
          },
        });
      } else {
        response = await api.get('filter.php', {
          params: {
            i: filterValue,
          },
        });
      }

      if (response.data.drinks) {
        setFilteredDrinks(
          response.data.drinks.filter(
            (drink) =>
              drinks.find((d) => d.idDrink === drink.idDrink) !== undefined
          )
        );
      } else {
        setFilteredDrinks([]);
      }
    } else {
      setFilteredDrinks(drinks);
    }

    setLoading(false);
  }

  return (
    <>
      <DrinkDetails
        drink={drinkDetails}
        hidden={drinkDetails === null}
        onClose={() => {
          setDrinkDetails(null);
        }}
      />

      <Wrapper>
        <SidebarMenu
          onSelect={(value) => {
            setCategory(value);
          }}
        />

        <Container>
          <header>
            <h1>{category || 'Drinks'}</h1>
          </header>

          <Filters>
            <section>
              <FiltersGroup
                onSelectFilterType={(e) => {
                  setFilterType(e.target.value);
                }}
                onChangeFilterValue={(e) => {
                  setFilterValue(e.target.value);
                }}
                inputValue={filterValue}
                handleFilter={handleFilter}
              />
            </section>
          </Filters>

          {loading ? (
            <AiOutlineReload
              className="loading"
              size={100}
              color={colors.primaryColor}
            />
          ) : (
            <Drinks>
              <h4>change your drink</h4>

              <ul>
                {filteredDrinks.map((drink) => (
                  <DrinkCard
                    key={String(drink.idDrink)}
                    drink={drink}
                    onDetails={() => {
                      setDrinkDetails(drink.idDrink);
                    }}
                  />
                ))}
              </ul>
            </Drinks>
          )}
        </Container>
      </Wrapper>
    </>
  );
}

export default Home;
