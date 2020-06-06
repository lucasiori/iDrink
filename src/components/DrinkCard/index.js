import React from 'react';

import { Container, DetailsButton } from './styles';

function DrinkCard() {
  return (
    <Container>
      <img
        src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
        alt="Drink"
      />

      <span>3-Mile Long Island iced Tea</span>

      <DetailsButton type="button">details</DetailsButton>
    </Container>
  );
}

export default DrinkCard;
