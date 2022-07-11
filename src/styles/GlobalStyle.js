import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';
import '../styles/font.css';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
    }
`;

export default GlobalStyle;