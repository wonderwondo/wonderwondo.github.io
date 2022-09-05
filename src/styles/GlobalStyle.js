import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';
import '../styles/font.css';

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    *, *::before, *::after {
        box-sizing: border-box;
    }

    :root {
        font-size: 10px;
    }

    body {
        margin: 0;
        overflow: overlay;
        
        ::-webkit-scrollbar { 
            width: 1rem;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 0.5rem;
            background-color: rgba(38, 38, 38, 0.5);
        }
    }

    .h0 {
        font-family: ${(p) => p.theme.font.family.title};
        font-weight: 700;
        font-size: clamp(5.6rem, 6.7vw, 9.6rem);
        letter-spacing: -0.15rem;
    }

    h1 {
        font-family: ${(p) => p.theme.font.family.title};
        font-weight: 700;
        font-size: 6.4rem;
        letter-spacing: -0.15rem;;
    }

    h2 {
        font-family: ${(p) => p.theme.font.family.title};
        font-weight: 700;
        font-size: clamp(3.6rem, 9.6vw, 5.6rem);
        letter-spacing: -0.15rem;;
    }

    h3 {
        font-family: ${(p) => p.theme.font.family.title};
        font-weight: 600;
        font-size: 4.2rem;
        letter-spacing: -0.15rem;;
    }

    h4 {
        font-family: ${(p) => p.theme.font.family.body};
        font-weight: 500;
        font-size: clamp(1.4rem, 3.7vw, 2.4rem);
    }

    h5 {
        font-family: ${(p) => p.theme.font.family.body};
        font-weight: 400;
        font-size: 2.0rem;
    }

    p {
        font-family: ${(p) => p.theme.font.family.body};
        font-weight: 400;
        font-size: 1.6rem;
        letter-spacing: 0.04rem;
    }

    .ps {
        font-family: ${(p) => p.theme.font.family.body};
        font-weight: 400;
        font-size: 1.4rem;
        letter-spacing: 0.04rem;
    }
`;

export default GlobalStyle;