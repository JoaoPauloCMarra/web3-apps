import { createGlobalStyle } from 'styled-components';

const Theme = {};

export default Theme;

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    font-weight: 300;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  body {
    position: relative;

    &[data-modal-is-open=""] {
      overflow: hidden;
    }
  }
`;
