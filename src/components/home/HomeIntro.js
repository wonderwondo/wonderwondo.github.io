import styled from "styled-components";
import { GlobalOuter, GlobalInner } from "../GlobalLayout";

const StyledHomeIntro = styled.div`
    width: 100%;
    height: 80vh;

    h2:nth-child(1) {
        color: ${(p) => p.theme.color.n900};
        font-weight: ${(p) => p.theme.font.weight.semibold};
        margin-top: 20rem;
        margin-bottom: 3.2rem;
    }

    h2:nth-child(2) {
        color: ${(p) => p.theme.color.n900};
        font-weight: ${(p) => p.theme.font.weight.semibold};
        margin-bottom: 1.6rem;
    }

    h4 {
        max-width: 53rem;
        margin-top: 10rem;
        line-height: 2.8rem;
    }

    @media ${(p) => p.theme.device.xs} {
        margin-top: 5rem;
    }
`;

function HomeIntro() {
    return(
        <StyledHomeIntro>
            <GlobalOuter>
                <GlobalInner>
                    <h2>Hello,</h2>
                    <h2>I’m an interaction designer</h2>
                    <h2>Wondo Jeong</h2>
                    <h4>Here are some projects that I am most proud of 
                        and give you a hint of my design approach.</h4>
                </GlobalInner>
            </GlobalOuter>
        </StyledHomeIntro>
    );
}
export default HomeIntro;