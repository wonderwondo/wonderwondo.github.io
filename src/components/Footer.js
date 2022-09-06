import { NavLink as Link } from 'react-router-dom';
import styled from "styled-components";
import { GlobalOuter, FooterInner } from "./GlobalLayout";

const StyledFooter = styled.div`
    width: 100%;
    height: 18rem;
    margin: auto auto;
    background-color: ${(p) => p.theme.color.n900};
`;

const FooterContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 4.6rem 0;
`;

const FooterContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const FooterContentCenter = styled(FooterContent)`
    justify-content: center;
`;

const FooterItemWrapper = styled.div`
    min-width: 20rem;
    display: flex;
    justify-content: space-between;

    p {
        color: ${(p) => p.theme.color.white};
        font-weight: ${(p) => p.theme.font.weight.semibold};
    }

    span {
        color: ${(p) => p.theme.color.white};
        margin: 0 1rem;
    }
    
    .sns  {
        width: 4rem;
        height: 4rem;
    }
`;

const NavLink = styled(Link)`
    color: ${(p) => p.theme.color.white};
    font-weight: ${(p) => p.theme.font.weight.semibold};
    text-transform: uppercase;
    letter-spacing: 1.25px;
    text-decoration: none;
`;

function Footer() {
    return(
        <StyledFooter>
            <GlobalOuter>
                <FooterInner>
                    <FooterContainer>
                        <FooterContent>
                            <FooterItemWrapper>
                                <p>© Wondo Jeong</p>
                            </FooterItemWrapper>
                            <FooterItemWrapper>
                                <a href="https://www.linkedin.com/"><img className='sns' src="image/footer_linkedin.png" alt="linkedin" /></a>
                                <a href="https://medium.com/"><img className='sns' src="image/footer_medium.png" alt="medium" /></a>
                                <a href="https://www.instagram.com/"><img className='sns' src="image/footer_instagram.png" alt="instagram" /></a>
                                <a href="mailto:wondojeong@gmail.com?subject=Hi!"><img className='sns' src="image/footer_email.png" alt="email" /></a>
                            </FooterItemWrapper>
                        </FooterContent>
                        <FooterContentCenter>
                            <FooterItemWrapper>
                                <NavLink to='/' className='ps'>Home</NavLink>
                                <span className='ps'>/</span>
                                <NavLink to='/work' className='ps'>Work</NavLink>
                                <span className='ps'>/</span>
                                <NavLink to='/blog' className='ps'>Blog</NavLink>
                                <span className='ps'>/</span>
                                <NavLink to='/about' className='ps'>About</NavLink>
                            </FooterItemWrapper>
                        </FooterContentCenter>
                    </FooterContainer>
                </FooterInner>
            </GlobalOuter>
        </StyledFooter>
    );
}

export default Footer;