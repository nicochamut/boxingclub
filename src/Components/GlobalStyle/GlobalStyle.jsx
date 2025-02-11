import { createGlobalStyle } from "styled-components";
import background from "../../Assets/background.jpg";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${background});
    background-size: cover;
    background-position: center;
    font-family: "MyFont", Arial, sans-serif;
  }


`;
