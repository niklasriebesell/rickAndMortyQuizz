import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    font-size: 62.5%;
    padding: 0;
    background-image: url("./img/rickMorty1");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'MyFont';
  }
  @font-face{
    font-family: 'schwifty';
    src: local('schwifty'), url(./fonts/schwifty.ttf) format('ttf');
  }
`;

export default GlobalStyle;
