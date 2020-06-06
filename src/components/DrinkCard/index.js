import React from 'react';
import PropTypes from 'prop-types';

import { Container, DetailsButton } from './styles';

function DrinkCard({ onDetails }) {
  return (
    <Container>
      <img
        src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
        alt="Drink"
      />

      <span>3-Mile Long Island iced Tea</span>

      <DetailsButton onClick={onDetails}>details</DetailsButton>
    </Container>
  );
}

DrinkCard.propTypes = {
  onDetails: PropTypes.func.isRequired,
};

export default DrinkCard;
