import styled, { keyframes } from "styled-components";

const OCardContainer = styled.div`
    width: calc(100% + 2*${(p) => p.theme.size.innerPadding});
    margin: 0 -${(p) => p.theme.size.innerPadding};
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
`;

const radiusChange = keyframes`
    from { border-radius: calc(${(p) => p.theme.size.innerPadding} + ${(p) => p.theme.size.borderRadius}); }
    to { border-radius: 0; }
`;

const radiusChangeInverse = keyframes`
    from { border-radius: 0; }
    to { border-radius: calc(${(p) => p.theme.size.innerPadding} + ${(p) => p.theme.size.borderRadius}); }
`;

const OCardImageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: sticky;
    top: 0;
    overflow: hidden;
    border: 3px solid ${(p) => p.theme.color.b50};
    border-width: ${(p) => (p.inView) ? '0px' : '100px'};
    -webkit-transition: border-width 1s ease-in-out;
            transition: border-width 1s ease-in-out;
    border-radius: calc(${(p) => p.theme.size.innerPadding} + ${(p) => p.theme.size.borderRadius});
    animation: ${(p) => (p.inView) ? radiusChange : radiusChangeInverse} 1s ease-in-out;
    animation-fill-mode: forwards;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
`;

const OCardImage = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    src: url(${(p) => p.background});
    object-fit: cover;
    filter: brightness(${(p) => (p.inView) ? 0.4 : 0.8});
    -webkit-transition: filter 1s ease-in-out;
            transition: filter 1s ease-in-out;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
`;

const OCardContent = styled.div`
    width: 74rem;
    min-height: 75vh;
    position: relative;
    margin-top: -40vh;
    margin-bottom: 20vh;
    margin-left: ${(p) => p.theme.size.innerPadding};
    padding-left: ${(p) => (p.inView) ? '0rem' : '6.2rem'};
    -webkit-transition: padding-left 1s ease-in-out;
            transition: padding-left 1s ease-in-out;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
`;

const OCardTitle = styled.div`
    h4, p {
        color: ${(p) => p.theme.color.white};
        line-height: 150%;
    }
    
    h4:nth-child(1) {
        font-weight: 700;
    }

    h4:nth-child(n+2) {
        font-weight: 400;
    }
`;

const OCardDesc = styled.div`
    margin-top: 50rem;
    width: 100%;

    h4, span {
        color: ${(p) => p.theme.color.white};
    }

    h4 {
        font-weight: 700;
    }

    span {
        font-family: ${(p) => p.theme.font.family.title};
        font-size: 4.8rem;
        font-weight: 600;
        line-height: 7.2rem;
    }
`;

export { OCardContainer, OCardImageWrapper, OCardImage, OCardContent, OCardTitle, OCardDesc };