import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
  }

  body {
    background-color: #04090e;
    color: #ffffff;
    font-family: sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
