import { createGlobalStyle } from 'styled-components';
import { Theme } from '../styles/variables';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
    background-color: ${({ theme }) => theme.colors.bg};
    font-family: ${({ theme }) => theme.fonts.font_family};
    color: ${({ theme }) => theme.colors.font};
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
    font-family: ${({ theme }) => theme.fonts.font_family};
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
