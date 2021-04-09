import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-size: 10px;
  }
`;

export default GlobalStyle;
