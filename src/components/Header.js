import styled from "styled-components";
import { Link } from 'react-router-dom';
import Button from './Button';

const Logo = styled.div`
    font-family: ${(p) => p.theme.font.family.title};
    font-weight: ${(p) => p.theme.font.weight.bold};
    font-size: clamp(1.6rem, 2vw, 2.4rem);
`;

const StyledHeader = styled.div`
    position: sticky;
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

        div {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 3.2rem;
        }
    }
`;

function Header() {
    return (
        <StyledHeader>
            <nav>
                <Link to='/'><Logo>wonder·wondo</Logo></Link>
                <div>
                    <Link to='/work'><Button variant='default' size='lg'>WORK</Button></Link>
                    <Link to='/blog'><Button variant='default' size='lg'>BLOG</Button></Link>
                    <Link to='/about'><Button variant='default' size='lg'>ABOUT</Button></Link>
                </div>
            </nav>
        </StyledHeader>
    );
}

export default Header;