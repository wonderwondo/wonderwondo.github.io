import styled from "styled-components";
import { GlobalOuter, CenteredInner } from "../GlobalLayout";
import { ALink } from "../CustomLink";

const StyledAboutIntro = styled.div`
    width: 100%;
    
    h1:nth-child(1) {
        margin-top: 20rem;
    }

    h5 {
        margin-top: 5rem;
        color: ${(p) => p.theme.color.n900};
        font-weight: ${(p) => p.theme.font.weight.semibold};
    }

    img {
        width: 68rem;
        object-fit: cover;
    }
`;

function AboutIntro() {
    return(
        <StyledAboutIntro>
            <GlobalOuter>
                <CenteredInner>
                    <h1>Annyeonghaseyo,</h1>
                    <h1> I’m Wondo Jeong.</h1>
                    <h5><ALink to='#'>Interaction designer</ALink> · <ALink to='#'>Soju bomb master</ALink> · <ALink to='#'>Aurora chaser</ALink></h5>
                    <img src='image/about/portrait.png' alt='portrait'/>
                </CenteredInner>
            </GlobalOuter>
        </StyledAboutIntro>
    );
};

export default AboutIntro;