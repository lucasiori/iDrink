import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import api from '../../services/api';

import alcoholic from '../../assets/alcoholic.svg';
import glass from '../../assets/glass.svg';

import colors from '../../utils/colors';
import {
  Wrapper,
  Overlay,
  Container,
  CloseButton,
  DrinkImage,
  DrinkName,
  DrinkTags,
  DrinkInformations,
  Content,
  DrinkIngredients,
  DrinkInstructions,
} from './styles';

const amountIngredients = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
];

function DrinkDetails({ drink: drink_id, hidden, onClose }) {
  const [drink, setDrink] = useState({});

  useEffect(() => {
    async function loadDrink() {
      const response = await api.get('lookup.php', {
        params: {
          i: drink_id,
        },
      });

      setDrink(response.data.drinks[0]);
    }

    if (drink_id) {
      loadDrink();
    }
  }, [drink_id]);

  return (
    <Wrapper hidden={hidden}>
      <Overlay hidden={hidden} onClick={onClose} />

      <Container hidden={hidden}>
        <CloseButton onClick={onClose}>
          <MdClose color={colors.primaryColor} size={48} />
        </CloseButton>

        <DrinkImage>
          <img src={drink.strDrinkThumb} alt="Thumbnail" />
        </DrinkImage>

        <DrinkName>{drink.strDrink}</DrinkName>

        <DrinkTags>
          {drink.tags && drink.tags.join(',').map((tag) => <span>{tag}</span>)}
        </DrinkTags>

        <DrinkInformations>
          <div>
            <i>
              <img src={alcoholic} alt="Alcoholic" width="18" />
            </i>
            <span>{drink.strAlcoholic}</span>
          </div>

          <div>
            <i>
              <img src={glass} alt="Glass" width="18" />
            </i>
            <span>{drink.strGlass}</span>
          </div>
        </DrinkInformations>

        <Content>
          <DrinkIngredients>
            <span>ingredients</span>

            <ul>
              {amountIngredients.map((index) => {
                if (drink[`strIngredient${index}`]) {
                  return (
                    <li key={drink[`strIngredient${index}`]}>
                      <span>{drink[`strIngredient${index}`]}</span>

                      {drink[`strMeasure${index}`] && (
                        <small>{drink[`strMeasure${index}`]}</small>
                      )}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </DrinkIngredients>

          {drink.strInstructions && (
            <DrinkInstructions>
              <p>{drink.strInstructions}</p>
            </DrinkInstructions>
          )}
        </Content>
      </Container>
    </Wrapper>
  );
}

DrinkDetails.propTypes = {
  drink: PropTypes.string,
  hidden: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

DrinkDetails.defaultProps = {
  drink: null,
};

export default DrinkDetails;
