import styled, { css } from 'styled-components';

import colors from '../../utils/colors';

export const Container = styled.aside`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.backgroundColor};
  border-right: 5px solid ${colors.primaryColor};
  padding: 30px 15px;
`;

export const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 30px;
  overflow: auto;

  header {
    position: relative;

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      display: block;
      background: ${colors.primaryColor};
      top: calc(50% - 1px);
      left: 0;
    }

    h2 {
      position: relative;
      width: max-content;
      background: ${colors.backgroundColor};
      font-size: 20px;
      color: ${colors.secondaryColor};
      text-transform: lowercase;
      padding: 0 5px;
      margin: 0 auto;
      z-index: 1;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    overflow: auto;

    ul {
      margin-top: 20px;
      overflow: auto;

      &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: ${colors.secondaryColor};
      }
    }
  }
`;

export const CategoryListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.textColor};
  text-transform: lowercase;
  padding: 10px 0;
  cursor: pointer;
  transition: color 150ms;

  &:hover {
    color: ${colors.secondaryColor};
    font-weight: bold;
  }

  ${(props) =>
    props.selected &&
    css`
      color: ${colors.secondaryColor};
      font-weight: bold;
      transform: translateX(-6px);

      svg {
        margin-right: 5px;
      }
    `}
`;
