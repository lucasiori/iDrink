import styled from 'styled-components';

import colors from '../../utils/colors';

export const Container = styled.div`
  width: 250px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, ${colors.primaryColor} 40%, #fff 0%);
  border: 2px solid ${colors.primaryColor};
  border-radius: 4px;
  box-shadow: 5px 7px 7px 0px rgba(0, 0, 0, 0.2);
  padding: 20px 25px;
  margin: 20px 15px;

  span {
    font-size: 16px;
    margin-top: 20px;
    text-align: center;
  }
`;

export const DrinkImage = styled.div`
  width: 130px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.backgroundColor};
  border: 5px solid ${colors.primaryColor};
  border-radius: 50%;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
`;

export const DetailsButton = styled.button.attrs({
  type: 'button',
})`
  width: 100%;
  background: ${colors.primaryColor};
  border: none;
  border-radius: 30px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  padding: 5px 20px;
  margin-top: auto;
  transition: background 300ms;

  &:hover {
    background: ${colors.secondaryColor};
  }
`;
