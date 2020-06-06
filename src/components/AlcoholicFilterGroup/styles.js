import styled, { css } from 'styled-components';

import colors from '../../utils/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-left: -20px;
`;

export const FilterTag = styled.span`
  background: #fff;
  border: 1.5px solid ${colors.primaryColor};
  border-radius: 30px;
  color: ${colors.primaryColor};
  font-size: 13px;
  text-transform: lowercase;
  padding: 3px 20px;
  margin: 5px 0 5px 20px;
  cursor: pointer;
  transition: background 300ms, color 300ms;

  & + span {
    margin-left: 20px;
  }

  ${(props) =>
    props.selected &&
    css`
      background: ${colors.primaryColor};
      color: #fff;
    `}
`;
