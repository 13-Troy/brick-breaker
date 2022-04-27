import { createGlobalStyle } from 'styled-components';
import { baseTheme } from '../styles/variables';

export const GlobalStyle = createGlobalStyle`

  body {
    background-color: ${baseTheme.colors.bg};
    font-family: ${baseTheme.fonts.font_family};
    color: ${baseTheme.colors.font};
  }
   
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p {
    white-space: pre-line;
  }

  a {
    outline: none;
    text-decoration: none;
  }
  
  :active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
  }
  textarea,
  input {
    outline: none;
    font-family: ${baseTheme.fonts.font_family};
  }

  input:-webkit-autofill {
      -webkit-box-shadow: inset 0 0 0 50px #fff !important;
  }

  textarea,
  input:matches(
  [type="email"],
  [type="number"],
  [type="password"],
  [type="search"],
  [type="tel"],
  [type="text"],
  [type="url"]
  ) {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
  }
  border-radius: 0;
`;
