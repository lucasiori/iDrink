import styled, { css } from 'styled-components';

import colors from '../../utils/colors';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
`;

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: stretch;
  padding: 30px;
  overflow: auto;

  header {
    position: relative;

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 5px;
      display: block;
      background: ${colors.primaryColor};
      top: calc(50% - 5px);
      left: 0;
    }

    h1 {
      position: relative;
      width: max-content;
      background: #fff;
      font-size: 35px;
      color: ${colors.secondaryColor};
      padding: 0 15px;
      margin: 0 auto;
      z-index: 1;
    }
  }
`;

export const Filters = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-top: 2px solid #8cc7f1;
  margin-top: 30px;

  section {
    max-height: 1000px;
    padding: 30px 0 20px;
    overflow: hidden;
    transition: all 300ms, padding 300ms;

    div + div {
      margin-top: 20px;
    }
  }
`;

export const FiltersTitle = styled.a`
  position: absolute;
  width: max-content;
  background: #fff;
  padding-right: 10px;
  top: calc(0% - 14px);
  left: 0;

  ${(props) =>
    !props.expanded &&
    css`
      h4 > svg {
        transform: rotate(-90deg);
      }

      & + section {
        max-height: 0;
        padding: 0;
        transition: all 300ms, padding 300ms 200ms;
      }
    `}

  h4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${colors.secondaryColor};
    font-size: 20px;
    font-weight: 400;
    text-transform: lowercase;
    margin: 0;
    cursor: pointer;

    svg {
      margin-left: 5px;
      transition: all 300ms;
    }
  }
`;

export const Drinks = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  > h4 {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    color: ${colors.secondaryColor};
    font-size: 20px;
    font-weight: 400;
    text-transform: lowercase;
    margin: 0;

    &::after {
      content: '';
      display: flex;
      flex: 1;
      height: 2px;
      background: ${colors.primaryColor};
      margin-left: 10px;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0 -15px;
  }
`;
