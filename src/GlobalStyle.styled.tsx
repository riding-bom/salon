import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 10px;
    background-color: #ccc;
  }
  body * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
