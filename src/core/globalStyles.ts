import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, select, button {
    font-family: 'Lato', sans-serif;
    background-color: #f3f8fa;
    color: #274060;

    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  a {
    color: indianred;
    text-decoration: none;
  }
`;
