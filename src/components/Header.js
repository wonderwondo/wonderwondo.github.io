import { useState } from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { MenuRounded } from "@material-ui/icons";

const VARIANTS = {
    home: css`
        --header-bg-color: ${(p) => p.theme.color.b50};
        --header-color: ${(p) => p.theme.color.n900};
        --button-hover-color: ${(p) => p.theme.color.b100};
        --button-active-color: ${(p) => p.theme.color.b150};
    `,
    work: css`
        --header-bg-color: black;
        --header-color: white;
        --button-hover-color: ${(p) => p.theme.color.n900};
        --button-active-color: ${(p) => p.theme.color.n700};
    `,
    blog: css`
        --header-bg-color: white;
        --header-color: ${(p) => p.theme.color.n900};
        --button-hover-color: ${(p) => p.theme.color.b100};
        --button-active-color: ${(p) => p.theme.color.b150};
    `,
    about: css`
        --header-bg-color: ${(p) => p.theme.color.n50};
        --header-color: ${(p) => p.theme.color.n900};
        --button-hover-color: ${(p) => p.theme.color.b100};
        --button-active-color: ${(p) => p.theme.color.b150};
    `,
};

const Logo = styled.div`
    display: flex;
    font-family: ${(p) => p.theme.font.family.title};
    font-weight: ${(p) => p.theme.font.weight.bold};
    font-size: clamp(2rem, 2.2vw, 2.4rem);
    color: var(--header-color);

    img {
        height: clamp(2rem, 2.2vw, 2.4rem);
        margin-right: 1rem;
        align-self: flex-start;
    }

    @media ${(p) => p.theme.device.xs} {
        margin: 4rem 0;
        flex-direction: column;
        align-self: flex-start;
    }
`;

const NavLink = styled(Link)`
    cursor: pointer;
    font-family: ${(p) => p.theme.font.family.body};
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--header-color);

    &:hover {
        transition: background 0.4s ease-in-out;
        background: var(--button-hover-color);
    }

    @media ${(p) => p.theme.device.sm} {
        padding: 1.6rem 2.4rem;
        border-radius: 1.6rem;
        background: var(--header-bg-color);

        &.active {
            background: var(--button-active-color);
        }   
    }
`;

const StyledHeader = styled.header`
    ${(p) => p.variantStyle}
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: var(--header-bg-color, ${(p) => p.theme.color.b50});

    a {
        text-decoration: none;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: ${(p) => p.theme.size.innerPadding};
        max-width: 144rem;
        margin: 0 auto;
        padding: 0 ${(p) => p.theme.size.innerPadding};     // clamp(4rem, 10.3vw, 14.8rem)

        @media ${(p) => p.theme.device.xs} {
            flex-direction: column;
            align-items: flex-start;
            height: auto;
            overflow: hidden;
            justify-content: center;
        }

        div {
            display: flex;
            align-items: center;

            .menu-icon {
                display: none;
                position: absolute;
                right: 3rem;
                font-size: 3rem;
                cursor: pointer;
    
                @media ${(p) => p.theme.device.xs} {
                    display: block;
                }
            }
        }

        ul {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 3.2rem;
            list-style: none;
            
            @media ${(p) => p.theme.device.xs} {
                display: ${(p) => p.isToggled ? 'grid' : 'none'};
                grid-template-columns: 1fr;
                margin-bottom: 2.4em;
            }

            li {
                @media ${(p) => p.theme.device.xs} {
                    display: flex;
                    align-items: flex-start;
                    margin: 1.6rem 0;
                }
            }
        }
    }
`;

function Header({ variant }) {
    const variantStyle = VARIANTS[variant];
    const [isToggled, setIsToggled] = useState(false);

    return (
        <StyledHeader variantStyle={variantStyle} isToggled={isToggled} >
            <nav>
                <div className='menu-tab'>
                    <Link to='/'>
                        <Logo>
                            <img src="image/header_icon.png" alt="header_icon" />
                            wonder·wondo
                        </Logo>
                    </Link>
                    <MenuRounded 
                        className='menu-icon'
                        style={{ color: "var(--header-color)" }}
                        onClick={() => {
                            setIsToggled(!isToggled);
                        }}
                    />
                </div>
                <ul>
                    <li><NavLink to='/work' activeStyle>Work</NavLink></li>
                    <li><NavLink to='/blog' activeStyle>Blog</NavLink></li>
                    <li><NavLink to='/about' activeStyle>About</NavLink></li>
                </ul>
            </nav>
        </StyledHeader>
    );
}

export default Header;