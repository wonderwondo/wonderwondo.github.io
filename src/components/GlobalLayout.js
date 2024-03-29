import styled from "styled-components";

const GlobalOuter = styled.div`
    display: flex;
    width: 100%;
    max-width: 144rem;
    height: inherit;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

const GlobalInner = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 0 ${(p) => p.theme.size.innerPadding};     // clamp(4rem, 10.3vw, 14.8rem)
`;

const CenteredInner = styled(GlobalInner)`
    justify-content: center;
    align-items: center;
`;

const FooterInner = styled(GlobalInner)`
    padding: 0 ${(p) => p.theme.size.footerInnerPadding};     // clamp(4rem, 10.3vw, 14.8rem)
`;

export {GlobalOuter, GlobalInner, CenteredInner, FooterInner};