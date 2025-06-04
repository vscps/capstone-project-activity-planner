import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-image: url("/assets/bg-1.svg");
    background-attachment: fixed;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-bebas-neue), sans-serif;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
  }

  h2 {
    font-size: 2em;
  }
  main {
    font-family: var(--font-inter), system-ui, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 150px;
  }
`;
