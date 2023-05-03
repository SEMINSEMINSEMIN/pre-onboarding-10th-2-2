import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --color-main-text: #000000;
    --color-search-section: #cae9ff;
    --color-search-searchBtn: #357ae0;
    --color-search-placeholder: #A7AFB7;
    --color-search-hover: #F8F9FA;
  }

  * {
    box-sizing: border-box;
    color: var(--color-text-main);
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

  input {
    padding: 0;
    border: none;
    font-size: 100%;
  }

  button {
    padding: 0;
    border: none;
    font-size: 100%;
    background: none;
    cursor: pointer;
    :disabled {
        cursor: not-allowed;
    }
  }

  a {
    text-decoration: none;
  }

  .ir {
    position: absolute;
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .App {
    text-align: center;
  }
`;
