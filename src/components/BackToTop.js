import styled from "styled-components";
import { GlobalOuter, FooterInner } from "./GlobalLayout";

const StyledBackToTop = styled.div`
    width: 100%;
    height: 5.6rem;
    margin-top: -5.6rem;
    position: sticky;
    bottom: 0;
    z-index: 10;
`;

const BackToTopBtnWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`;

const BackToTopBtn = styled.div`
    width: 18.2rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0.2rem 0.5rem 0.2rem rgba(0, 0, 0, 0.1);
    background-color: ${(p) => p.theme.color.white};
    border-radius: 1rem 1rem 0 0;
    cursor: pointer;

    span {
        margin-right: 0.8rem;
        font-weight: ${(p) => p.theme.font.weight.semibold};
        text-transform: uppercase;
        letter-spacing: 1.25px;
    }

    img {
        width: 2.4rem;
        height: 2.4rem;
    }

    :hover {
        -webkit-filter: brightness(0.8);
                filter: brightness(0.8);
    }
    -webkit-transition: filter 0.2s ease-in-out;
            transition: filter 0.2s ease-in-out;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
`;

const toTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function BackToTop() {
    return(
        <StyledBackToTop>
            <GlobalOuter>
                <FooterInner>
                    <BackToTopBtnWrapper>
                        <BackToTopBtn onClick={toTop}>
                            <span className='ps'>Back to Top</span>
                            <img src="image/backtotop.png" alt="arrow"/>
                        </BackToTopBtn>
                    </BackToTopBtnWrapper>
                </FooterInner>
            </GlobalOuter>
        </StyledBackToTop>
    );
}

export default BackToTop;