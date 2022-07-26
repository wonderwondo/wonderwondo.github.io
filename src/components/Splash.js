import styled from "styled-components";

const StyledSplash = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    background: ${(p) => p.theme.color.n900};
    animation: hide ease-in-out 1.5s;
    animation-delay: 6.5s;
    animation-fill-mode: forwards;

    div {
        width: 100%;
        max-width: 144rem;
        justify-content: center;
        margin: 0 auto;

        .splash-container {
            width: 100%;
            height: 50vh;
            display: flex;
            align-items: center;
            padding: 0 clamp(4rem, 10.3vw, 14.8rem);

            @media ${(p) => p.theme.device.xs} {
                flex-direction: column;
            }

            .images {
                max-width: 13rem;
                @media ${(p) => p.theme.device.xs} {
                    transform: translate(-8rem, -10rem);
                }
            }

            .messages {
                font-family: ${(p) => p.theme.font.family.title};
                font-weight: ${(p) => p.theme.font.weight.bold};
                font-size: clamp(4rem, 10vw ,8rem);
                color: ${(p) => p.theme.color.b50};
            }

            img {
                max-width: 9rem;
                object-fit: cover;
                position: relative;
            }

            .i, .m {
                opacity: 0;
                position: absolute;
            }
    
            .i:nth-child(1), .m:nth-child(1) {
                animation: change-1 7.5s;
            }
            .i:nth-child(2), .m:nth-child(2) {
                animation: change-2 7.5s;
            }
            .i:nth-child(3), .m:nth-child(3) {
                animation: change-3 7.5s;
            }
        }
    }

    @keyframes hide {
        0% {
            transform: translateY(0);
        } 
        100% {
            transform: translateY(-100vh);
        }
    }

    @keyframes change-1 {
        0% {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        15% {
            opacity: 1;
            transform: translateZ(0);
        }
        30% {
            opacity: 0;
        }
    }

    @keyframes change-2 {
        30% {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        45% {
            opacity: 1;
            transform: translateZ(0);
        }
        60% {
            opacity: 0;
        }
    }

    @keyframes change-3 {
        60% {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        75% {
            opacity: 1;
            transform: translateZ(0);
        }
        90% {
            opacity: 0;
        }
    }
`;

function Splash() {
    return(
        <StyledSplash>
            <div>
                <div className='splash-container'>
                    <div className='images'>
                        <img className='i' src="image/splash_circle.png" alt="splash_circle" />
                        <img className='i' src="image/splash_square.png" alt="splash_splash_square" />
                        <img className='i' src="image/splash_star.png" alt="splash_star" />
                    </div>
                    <div className='messages'>
                        <div className='m'>wonder why.</div>
                        <div className='m'>zoom in & out.</div>
                        <div className='m'>connect.</div>
                    </div>
                </div>
            </div>
            </StyledSplash>
    );
}

export default Splash;