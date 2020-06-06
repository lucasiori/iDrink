import React, { useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';

import SidebarMenu from '../../components/SidebarMenu';
import InputFilterGroup from '../../components/InputFilterGroup';
import AlcoholicFilterGroup from '../../components/AlcoholicFilterGroup';
import GlassFilterGroup from '../../components/GlassFilterGroup';
import DrinkCard from '../../components/DrinkCard';
import DrinkDetails from '../../components/DrinkDetails';

import colors from '../../utils/colors';
import { Wrapper, Container, Filters, FiltersTitle, Drinks } from './styles';

function Home() {
  const [expandedFilters, setExpandedFilters] = useState(true);
  const [drinkDetails, setDrinkDetails] = useState(null);

  return (
    <>
      <DrinkDetails
        hidden={drinkDetails === null}
        onClose={() => {
          setDrinkDetails(null);
        }}
      />

      <Wrapper>
        <SidebarMenu />
        <Container>
          <header>
            <h1>Ordinary Drink</h1>
          </header>

          <Filters>
            <FiltersTitle
              expanded={expandedFilters ? 1 : 0}
              onClick={() => {
                setExpandedFilters(!expandedFilters);
              }}
            >
              <h4>
                filters
                <GoTriangleDown color={colors.secondaryColor} size={20} />
              </h4>
            </FiltersTitle>

            <section>
              <InputFilterGroup />
              <AlcoholicFilterGroup />
              <GlassFilterGroup />
            </section>
          </Filters>

          <Drinks>
            <h4>change your drink</h4>

            <ul>
              <DrinkCard
                onDetails={() => {
                  setDrinkDetails(1);
                }}
              />
              <DrinkCard />
              <DrinkCard />
              <DrinkCard />
              <DrinkCard />
              <DrinkCard />
              <DrinkCard />
              <DrinkCard />
              <DrinkCard />
              <DrinkCard />
              <DrinkCard />
              <DrinkCard />
            </ul>
          </Drinks>
        </Container>
      </Wrapper>
    </>
  );
}

export default Home;
