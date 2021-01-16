import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
  } 

  span, p, h1, a {
    font-family: Poppins, sans-serif;
  }

  h1 {
    font-size: 24px;
    font-weight: normal;
  }

  span, p, a {
    font-size: 18px;
  }
`;

export default GlobalStyles;