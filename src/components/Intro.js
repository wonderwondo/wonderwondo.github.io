import styled from "styled-components";

const StyledIntro = styled.main`
    width: 100%;
    height: 100vh;
    position: 0;
    background-color: ${(p) => p.theme.color.b50};

    div {
        display: flex;
        width: 100%;
        max-width: 144rem;
        height: inherit;
        justify-content: center;
        margin: 0 auto;

        .intro-container {
            display: flex;
            flex-direction: column;
            padding: 0 clamp(4rem, 10.3vw, 14.8rem);

            .intro-h2-light {
                font-weight: 600;
            }

            .intro-h2-light:nth-child(1) {
                margin-bottom: 3.2rem;
            }

            .intro-h2-light:nth-child(2) {
                margin-bottom: 1.6rem;
            }

            .intro-h4-light {
                max-width: 53rem;
                margin-top: 10rem;
                line-height: 2.8rem;
            }

            @media ${(p) => p.theme.device.xs} {
                justify-content: center;
            }
        }
    }
`;

function Intro() {
    return(
        <StyledIntro>
            <div>
                <div className='intro-container'>
                    <h2 className='intro-h2-light'>Hello,</h2>
                    <h2 className='intro-h2-light'>I’m an interaction designer</h2>
                    <h2>Wondo Jeong</h2>
                    <h4 className='intro-h4-light'>Here are some projects that I am most proud of 
                        and give you a hint of my design approach.</h4>
                </div>
            </div>
        </StyledIntro>
    );
}
export default Intro;