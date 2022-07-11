import { createGlobalStyle } from "styled-components";
import '../styles/font.css';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
    }
`;

export default GlobalStyle;