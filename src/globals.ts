import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  .global-container-page {
    padding: 20px 50px 20px 120px;
  }
`;

export const theme = {
  colors: {
    black: '#2F3136',
    white: '#ffffff',
    blue: '#1A0931',
    purple: '#5E20B3',
    grey: {
      primary: '#5D6372',
      secondary: '#B7BDC9',
      tertiary: '#E4E4E8',
      quarternary: '#F2F2F4',
    }
  }
}
 
export default GlobalStyle;
