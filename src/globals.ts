import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

`;

export const theme = {
  colors: {
    black: '#2F3136',
    white: '#ffffff',
    purple: {
      primary: '#1A0931',
      secondary: '#5E20B3' 
    },
    grey: {
      primary: '#5D6372',
      secondary: '#B7BDC9',
      tertiary: '#E4E4E8',
      quarternary: '#F2F2F4',
    }
  }
}
 
export default GlobalStyle;
