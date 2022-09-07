import styled from "styled-components";
import { GlobalOuter, CenteredInner } from "../GlobalLayout";
import { Card, CardImageWrapper } from "../Card";
import { ButtonContainer, Button, OutlinedButton } from "../Button";

const StyledAboutContent = styled.div`
    h4 {
        color: ${(p) => p.theme.color.n900};
        font-weight: ${(p) => p.theme.font.weight.bold};
    }

    h5 {
        margin-top: 3rem;
    }

    img {
        object-fit: cover;
    }

    span {
        margin-top: 2rem;
        font-style: italic;
        text-align: center;
        line-height: 120%;
        color: ${(p) => p.theme.color.n500};
    }

    .resumeTitle {
        display: flex;
        justify-content: space-between;
    }

    .resumeItem {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 5rem;
    }

    p {
        line-height: 250%;
    }
`;

function AboutContent() {
    return(
        <StyledAboutContent>
            <GlobalOuter>
                <CenteredInner>
                    <Card style={{marginTop: '-9rem'}}>
                        <h4>wonder wondo.</h4>
                        <h5>
                            This ‘brand’ is given by my dear colleague and friend Yee Mun Ooi who works together at Fjord.
                            Well, I don’t recall why I was called by the nickname at that time, but it is my favourite description about me!
                        </h5>
                        <h5>
                            Wondering is one of the most important assets we have as designers— it helps us question things and explore new ideas.
                            Interestingly, The more I know, the more questions I have(I resonates with my 3yrs/o daughter), and naturally, it fuels the conversation and finally connects people which is the source of the creativity!
                        </h5>
                        <h5>
                            I hope I never stop wondering and will try to produce good questions.
                            Well, you are always welcome to stop me from asking questions, like I try to escape from my daughter’s questions *sometimes*.
                            I understand.
                        </h5>
                    </Card>
                    <Card>
                        <h4>zoom in & out and connect</h4>
                        <h5>
                            Including always being curious, zooming out and in and connecting insights are the principles of ways of working that I valued the most.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </h5>
                        <h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </h5>
                        <CardImageWrapper>
                            <img src='image/about/zoomin.png' alt='icons' style={{width: '34rem'}}/>
                        </CardImageWrapper>
                    </Card>
                    <Card>
                        <h4>lastly, a product I love.</h4>
                        <h5>
                            I love my Leica M5. 
                            Its form, texture and physical interaction(e.g. rotating a handle and the metallic sound of pressing the shutter) completes the moment I capture the moment with it.
                        </h5>
                        <h5>
                            Yes, the M5 is a very slow and even heavy machine. 
                            It can be seen that it is on the opposite axis to the digital product that I am designing or using. 
                            However, M5 makes the moment of shooting precious. 
                            I found people feel more gifted the moment being captured with M5 than the mobile phone cameras. 
                            Along with that, I am engaged on shooting and appreciate the subject.
                        </h5>
                        <h5>
                            And, lastly, the moment of opening the paper bag of batched photos is like watching a thriller, romantic or sometimes sci-fi movie: amazed, love and beyond my imagination!
                        </h5>
                        <CardImageWrapper>
                            <img src='image/about/jinheejiwoo.jpg' alt='jinheejiwoo' style={{width: '42rem'}} />
                            <span className='ps'>Jinhee&Jiwoo in Montreal,<br />Leica M5 (roll: Kodak ColourPlus)</span>
                        </CardImageWrapper>
                        <ButtonContainer style={{marginTop: '5rem'}}>
                            <a href="https://www.instagram.com/">
                                <OutlinedButton style={{width: '21rem'}}>See Photos</OutlinedButton>
                            </a>
                        </ButtonContainer>
                    </Card>
                    <Card style={{borderRadius: '4.6rem 4.6rem 0 0'}}>
                        <div className='resumeTitle'>
                            <h4>Resume</h4>
                            <h4>© all rights reserved</h4>
                        </div>
                        <div className='resumeItem'>
                            <img src='image/about/profile.jpg' alt='profile' style={{width: '16rem'}} />
                            <p style={{marginLeft: '6rem', fontWeight: 600}}>Name:<br />Role:<br />Email:<br />Location<br />Mobile:</p>
                            <p style={{marginLeft: '2.4rem'}}>Wondo Jeong<br />Interaction Designer<br />wondopamine@gmail.com<br />Singapore(current)<br />(+65) 8894 6838</p>
                        </div>
                    <ButtonContainer style={{marginTop: '5rem'}}>
                        <a href="https://www.linkedin.com/">
                            <Button style={{width: '21rem'}}>See My Resume</Button>
                        </a>
                    </ButtonContainer>
                    </Card>
                </CenteredInner>
            </GlobalOuter>
        </StyledAboutContent>
    );
}

export default AboutContent;