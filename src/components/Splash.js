import styled from "styled-components";

const StyledSplash = styled.section`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    background: ${(p) => p.theme.color.n900};
    animation: hide ease 1s;
    animation-delay: 5s;
    animation-fill-mode: forwards;

    .splash-container {
        width: 100%;
        max-width: 144rem;
        height: 100%;
        display: flex;
        flex: 1 auto;
        align-items: center;
        justify-content: flex-start;
        margin: 0 auto;
        padding: 0 clamp(4rem, 10.3vw, 14.8rem);

        @media ${(p) => p.theme.device.xs} {
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        }

        .images {
            width: 15%;
            max-width: 16rem;
            height: 5vh;

            .i {
                width: clamp(6rem, 12vw ,9rem);
                object-fit: cover;
            }

            @media ${(p) => p.theme.device.xs} {
                width: 100%;
                margin-bottom: 4rem;
            }
        }

        .messages {
            width: 85%;
            height: 5vh;
            font-family: ${(p) => p.theme.font.family.title};
            font-weight: ${(p) => p.theme.font.weight.bold};
            font-size: clamp(4rem, 10vw ,8rem);
            color: ${(p) => p.theme.color.b50};

            @media ${(p) => p.theme.device.xs} {
                width: 100%;
            }
        }

        .i, .m {
            opacity: 0;
            position: absolute;
        }

        .i:nth-child(1), .m:nth-child(1) {
            animation: change-1 cubic-bezier(.04,.82,.54,1.55) 5s;
        }
        .i:nth-child(2), .m:nth-child(2) {
            animation: change-2 cubic-bezier(.04,.82,.54,1.55) 5s;
        }
        .i:nth-child(3), .m:nth-child(3) {
            animation: change-3 cubic-bezier(.04,.82,.54,1.55) 5s;
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
            transform: translateY(100%);
        }
        15% {
            opacity: 1;
            transform: translateY(0%);
        }
        20% {
            opacity: 1;
            transform: translateY(-10%);
        }
        33% {
            opacity: 0;
            transform: translateY(0%);
        }
    }

    @keyframes change-2 {
        33% {
            opacity: 0;
            transform: translateY(100%);
        }
        48% {
            opacity: 1;
            transform: translateY(0%);
        }
        53% {
            opacity: 1;
            transform: translateY(-10%);
        }
        66% {
            opacity: 0;
            transform: translateY(0%);
        }
    }

    @keyframes change-3 {
        66% {
            opacity: 0;
            transform: translateY(100%);
        }
        81% {
            opacity: 1;
            transform: translateY(0%);
        }
        86% {
            opacity: 1;
            transform: translateY(-10%);
        }
        100% {
            opacity: 0;
            transform: translateY(0%);
        }
    }
`;

function Splash() {
    return(
        <StyledSplash>
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
            </StyledSplash>
    );
}

export default Splash;