import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
  }

  a {
  }

  a, a:visited, a:active {
    text-decoration: none;
    color: inherit;
  }

  body {
    /* background-color: #E5E5E5; */
  }

  span, p, h1, a, label, select, textarea, li, input[type=text] {
    font-family: Poppins, sans-serif;
  }

  h1 {
    font-size: 24px;
    font-weight: normal;
  }

  span, p, a {
    font-size: 18px;
  }

  li {
    list-style-type: none;
  }
`;

export default GlobalStyles;
