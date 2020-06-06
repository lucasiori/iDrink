import { createGlobalStyle } from 'styled-components';

import colors from '../utils/colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100vh;
    overflow: hidden;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font: 15px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  input {
    width: 100%;
    height: 45px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: ${colors.textColor};
    padding: 5px 10px
  }

  input::placeholder {
    color: #999;
  }
`;
