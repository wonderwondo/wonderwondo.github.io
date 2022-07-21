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

        @keyframes fadeInUp{
            0% {
                opacity: 0;
                transform: translate3d(0, 100%, 0);
            }
            to {
                opacity: 1;
                transform: translateZ(0);
            }
        }

        .intro-container {
            display: flex;
            flex-direction: column;
            padding: 0 clamp(4rem, 10.3vw, 14.8rem);
            
            img {
                max-width: 32.5rem;
                object-fit: cover;
                position: relative;
                animation: fadeInUp 2s;
            }

            span {
                color: ${(p) => p.theme.color.n900};
                position: relative;
                animation: fadeInUp 1.5s;
            }
        }
    }
`;

function Intro() {
    return(
        <StyledIntro>
            <div>
                <div className='intro-container'>
                    <img src="image/intro_circle.png" alt="intro_circle" />
                    <span className='h0'>Wonder why.</span>
                </div>
            </div>
        </StyledIntro>
    );
}
export default Intro;