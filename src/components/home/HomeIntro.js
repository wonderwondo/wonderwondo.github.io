import styled from "styled-components";
import { GlobalOuter, GlobalInner } from "../GlobalLayout";

const StyledHomeIntro = styled.div`
    width: 100%;
    height: 80vh;
    position: 0;

    .h2-light {
        font-weight: 600;
    }

    .h2-light:nth-child(1) {
        margin-top: 12rem;
        margin-bottom: 3.2rem;
    }

    .h2-light:nth-child(2) {
        margin-bottom: 1.6rem;
    }

    .h4-light {
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
                    <h2 className='h2-light'>Hello,</h2>
                    <h2 className='h2-light'>I’m an interaction designer</h2>
                    <h2>Wondo Jeong</h2>
                    <h4 className='h4-light'>Here are some projects that I am most proud of 
                        and give you a hint of my design approach.</h4>
                </GlobalInner>
            </GlobalOuter>
        </StyledHomeIntro>
    );
}
export default HomeIntro;