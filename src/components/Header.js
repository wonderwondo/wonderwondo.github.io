import { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Button from './Button';
import { MenuRounded } from "@material-ui/icons";

const Logo = styled.div`
    font-family: ${(p) => p.theme.font.family.title};
    font-weight: ${(p) => p.theme.font.weight.bold};
    font-size: clamp(2rem, 2.2vw, 2.4rem);

    @media ${(p) => p.theme.device.xs} {
        margin: 4rem 0;
    }
`;

const StyledHeader = styled.header`
    position: fixed;
    width: 100vw;
    top: 0;
    background-color: ${(p) => p.theme.color.b50};

    a {
        text-decoration: none;
        color: ${(p) => p.theme.color.n900};
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 11.2rem;
        max-width: 144rem;
        margin: 0 auto;
        padding: 0 clamp(4rem, 10.3vw, 14.8rem);

        @media ${(p) => p.theme.device.xs} {
            flex-direction: column;
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
                margin-bottom: 2em;
            }

            li {
                margin: 0 auto;
            }
    }
`;

function Header() {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <StyledHeader isToggled={isToggled}>
            <nav>
                <div className='menu-tab'>
                    <Link to='/'><Logo>wonder·wondo</Logo></Link>
                    <MenuRounded 
                        className='menu-icon'
                        onClick={() => {
                            setIsToggled(!isToggled);
                            console.log("haha");
                        }} 
                    />
                </div>
                <ul>
                    <li><Link to='/work'><Button variant='default' size='lg'>WORK</Button></Link></li>
                    <li><Link to='/blog'><Button variant='default' size='lg'>BLOG</Button></Link></li>
                    <li><Link to='/about'><Button variant='default' size='lg'>ABOUT</Button></Link></li>
                </ul>
            </nav>
        </StyledHeader>
    );
}

export default Header;