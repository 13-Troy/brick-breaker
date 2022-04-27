import { createGlobalStyle } from 'styled-components';
import { colors as c, baseTheme } from '../styles/variables';

export const GlobalStyle = createGlobalStyle`

   body {
      background-color: ${baseTheme.colors.bg};
      font-family: 'Montserrat', sans-serif
   }
   
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  p {
      white-space: pre-line;
  }
  
  /* Remove outline on the forms and links */
  :active, :hover, :focus {
      outline: 0;
      outline-offset: 0;
  }
  input {
      outline: none;
  }
  input:-webkit-autofill {
      -webkit-box-shadow: inset 0 0 0 50px #fff !important;
  }

  ::-webkit-input-placeholder { /* WebKit browsers */
      color: ${c.black};
  }
  input:focus::-webkit-input-placeholder {
      color: ${c.white};
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: ${c.black};
  }
  input:focus:-moz-placeholder {
      color: ${c.white};
  }   
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: ${c.black};
  }
  input:focus::-moz-placeholder {
      color: ${c.white};
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
      color: ${c.black};
  }
  input:focus:-ms-input-placeholder  {
      color: ${c.white};
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
