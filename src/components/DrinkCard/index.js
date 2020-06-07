import React from 'react';
import PropTypes from 'prop-types';

import { Container, DrinkImage, DetailsButton } from './styles';

function DrinkCard({ drink, onDetails }) {
  return (
    <Container>
      <DrinkImage>
        <img src={drink.strDrinkThumb} alt="Thumbnail" />
      </DrinkImage>

      <span>{drink.strDrink}</span>

      <DetailsButton onClick={onDetails}>details</DetailsButton>
    </Container>
  );
}

DrinkCard.propTypes = {
  drink: PropTypes.shape({
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
  }).isRequired,
  onDetails: PropTypes.func.isRequired,
};

export default DrinkCard;
