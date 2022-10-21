import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: 'Open Sans', sans-serif;
  }

  .global-container-page {
    padding: 20px 50px 20px 120px;
  }
`;
 
export default GlobalStyle;
