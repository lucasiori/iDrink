import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  div {
    display: flex;
    flex-direction: column;

    &:first-child {
      width: 180px;
    }

    & + div {
      max-width: 500px;
      display: flex;
      flex: 1;
      margin-left: 30px;

      input {
        margin-top: auto;
      }
    }

    span {
      margin-bottom: 8px;
    }
  }
`;
