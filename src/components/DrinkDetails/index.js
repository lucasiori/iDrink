import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

import alcoholic from '../../assets/alcoholic.svg';
import glass from '../../assets/glass.svg';

import colors from '../../utils/colors';
import {
  Wrapper,
  Overlay,
  Container,
  CloseButton,
  DrinkName,
  DrinkTags,
  DrinkInformations,
  Content,
  DrinkIngredients,
  DrinkPreparation,
} from './styles';

function DrinkDetails({ hidden, onClose }) {
  return (
    <Wrapper hidden={hidden}>
      <Overlay hidden={hidden} onClick={onClose} />

      <Container hidden={hidden}>
        <CloseButton onClick={onClose}>
          <MdClose color={colors.primaryColor} size={48} />
        </CloseButton>

        <img
          src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
          alt="Drink"
        />

        <DrinkName>3-Mile Long Island Iced Tea</DrinkName>

        <DrinkTags>
          <span>IBA</span>
          <span>ContemporaryClassic</span>
        </DrinkTags>

        <DrinkInformations>
          <div>
            <i>
              <img src={alcoholic} alt="Alcoholic" width="18" />
            </i>
            <span>Alcoholic</span>
          </div>

          <div>
            <i>
              <img src={glass} alt="Glass" width="18" />
            </i>
            <span>Cocktail glass</span>
          </div>
        </DrinkInformations>

        <Content>
          <DrinkIngredients>
            <span>ingredients</span>

            <ul>
              <li>
                <span>Tequila</span>
                <small>1 1/2 oz</small>
              </li>
              <li>
                <span>Triple sec</span>
                <small>1/2 oz</small>
              </li>
              <li>
                <span>Lime juice</span>
                <small>1 oz</small>
              </li>
              <li>
                <span>Salt</span>
              </li>
            </ul>
          </DrinkIngredients>

          <DrinkPreparation>
            <p>
              Rub the rim of the glass with the lime slice to make the salt
              stick to it. Take care to moisten only the outer rim and sprinkle
              the salt on it. The salt should present to the lips of the imbiber
              and never mix into the cocktail. Shake the other ingredients with
              ice, then carefully pour into the glass.
            </p>
          </DrinkPreparation>
        </Content>
      </Container>
    </Wrapper>
  );
}

DrinkDetails.propTypes = {
  hidden: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DrinkDetails;
