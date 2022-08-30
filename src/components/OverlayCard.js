import styled from "styled-components";

const OverlayCardContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`;

const OverlayCardBg = styled.div`
    width: 100%;
    height: calc(100vh - (2 * ${(p) => p.theme.size.headerHeight}));
    display: block;
    margin: ${(p) => p.theme.size.headerHeight} 0;
    background-image: url(${(p) => p.background});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 6.4rem;
    filter: brightness(0.8);
`;

const OverlayCardTitle = styled.div`
    width: 74rem;
    position: absolute;
    top: 45%;
    margin-left: 6.2rem;

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

export { OverlayCardContainer, OverlayCardBg, OverlayCardTitle };